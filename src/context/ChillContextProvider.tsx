import { useEffect, useState } from "react";
import ChillContext from "./ChillContext";
import data from "../utils/ConstData";
import toast from "react-hot-toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ChillContextProvider(props: { children: any }) {
  const [isChilling, setIsChilling] = useState<boolean>(false);
  const [currentDuration, setCurrentDuration] = useState<number>(
    data[0].duration
  );
  const [currentCycle, setCurrentCycle] = useState<number>(0);
  const [timer, setTimer] = useState<number>(data[0].duration);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  useEffect(() => {
    // Si on est en pause on clearInterval pour enlever le callback de baisser le timer
    const decrementTime = setInterval(() => {
      if (!isPaused) {
        setTimer((prevTime) => {
          return prevTime - 1;
        });
      }
    }, 1000);
    return () => clearInterval(decrementTime);
  }, [isPaused]);

  useEffect(() => {
    // On arrive à 0 faut changer de cycle
    if (timer <= 0) {
      handleCycleChange();
    }
  }, [timer]);

  const handlePausedChange = () => {
    setIsPaused((prevValue) => !prevValue);
  };

  const handleCycleChange = () => {
    if (currentCycle == data.length - 1) {
      toast("C'est TERMINE");
      resetValues();
      return;
    }
    setCurrentCycle((prevCycle) => prevCycle + 1);
    setIsChilling((prevChillingValue) => !prevChillingValue);
  };

  const resetValues = () => {
    setCurrentCycle(0);
    setIsChilling(false);
    setIsPaused(true);
  };

  useEffect(() => {
    setCurrentDuration(data[currentCycle].duration);
    setTimer(data[currentCycle].duration);
    if (currentCycle != 0) {
      toast(data[currentCycle].text, {
        icon: data[currentCycle].emoji,
      });
    }
  }, [currentCycle]);

  return (
    <ChillContext.Provider
      value={{
        currentDuration,
        currentCycle,
        timer,
        isChilling,
        isPaused,
        handlePausedChange,
        handleCycleChange,
      }}
    >
      {props.children}
    </ChillContext.Provider>
  );
}
