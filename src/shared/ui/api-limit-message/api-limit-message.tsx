// components/ApiLimitMessage.tsx
"use client"
import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/button/button';
import  './api-limit-message.scss'
import { getHourInDay } from '@/shared/utils/get-hour-in-day';

export const ApiLimitMessage = () => {
  return (
    <div className="container api-limit-message">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="api-limit-message__container"
      >
        <h2 className="api-limit-message__title">
          Достигнут лимит запросов
        </h2>

        <div className="api-limit-message__desc">
          <p>
            К сожалению, текущий лимит запросов к сервису исчерпан
          </p>
          <p>
            {`Попробуйте снова через ${getHourInDay()} часа или обратитесь в поддержку.`}
          </p>
        </div>

        <div className="api-limit-message__actions">
          <Button
            variant="primary"
          >
            <a href="https://kinopoiskapiunofficial.tech" target="_blank">
              Увеличить лимит
            </a>
          </Button>

          <Button
            variant="ghost"
            onClick={() => window.location.reload()}
          >
            Обновить страницу
          </Button>
        </div>

        <p className="api-limit-message__code">
          Код ошибки: <strong>402 (Too Many Requests)</strong>
        </p>
      </motion.div>
    </div>
  )
}