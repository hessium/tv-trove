import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/shared/api/auth';
import { apiErrorParse } from '@/shared/utils/api-error-parse';
import { cookier } from '@/shared/utils/cookier';
import { AuthLoginProps } from '@/shared/types/api/auth';

export const useAuthPage = () => {

  const methods = useForm<AuthLoginProps>();

  const mutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: async ({ data, status }) => {
      if (status === 406) {
        return apiErrorParse(data, { setError: methods.setError });
      }

      cookier.setToken(data.accessToken);
      console.log(data);
    },
  });

  const onSubmit = (data: AuthLoginProps) => {
    mutation.mutate(data);
  };

  return { methods, mutation, onSubmit };
};
