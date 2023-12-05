import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import styles from '../css/Countdown.module.css';

const Countdown = ({ dia, mes, anio }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Fecha objetivo del evento
    if (anio!=="" && mes!=="" && dia!=="") {
      const targetDate = new Date(`${anio}-${(mes).padStart(2,'0')}-${(dia).padStart(2,'0')}T20:00:00`)
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Cálculo del tiempo restante en días, horas, minutos y segundos
        const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const remainingMinutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualización del estado con el tiempo restante
        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);

        // Finalizar el intervalo cuando el evento haya ocurrido
        if (distance < 0) {
          clearInterval(interval);
          // Puedes realizar alguna acción cuando finalice el contador
          console.log('El evento ha ocurrido');
        }
      }, 1000);

      // Limpieza del intervalo cuando el componente se desmonte
      return () => clearInterval(interval);
    }
  }, [dia, mes, anio]);

  return (
    <>
      <Typography
        variant="h6"
        component="h6"
        align="center"
      >
        Faltan
      </Typography>
      <div className={styles.countdown}>
        <div className={styles.time}>
          <div className={styles.unit}>
            <span className={styles.value}>{days}</span>
            <span className={styles.label}>Días</span>
          </div>
          <div className={styles.unit}>
            <span className={styles.value}>{hours}</span>
            <span className={styles.label}>Horas</span>
          </div>
          <div className={styles.unit}>
            <span className={styles.value}>{minutes}</span>
            <span className={styles.label}>Minutos</span>
          </div>
          <div className={styles.unit}>
            <span className={styles.value}>{seconds}</span>
            <span className={styles.label}>Segundos</span>
          </div>
        </div>
        {/* <p className={styles.message}>¡No te pierdas nuestro Seminario Gratuito con un costo de $5000MXN.¡EN ESTA OCASIÓN COMPLETAMENTE GRATIS!</p> */}
      </div>
    </>
  );
};

export default Countdown;
