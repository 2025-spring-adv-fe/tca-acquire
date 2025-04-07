import React from "react";
import { useNavigate } from "react-router";

interface SetupProps {
  setTitle: (t: string) => void;
}

export const Setup: React.FC<SetupProps> = ({
  setTitle
}) => {

  setTitle("Setup");


    const nav = useNavigate();

    return (
        <>
            <button
                className="btn btn active btn-secondary btn-lg mt-4"
                onClick={() => nav("/play")}
            >
                Start Playing
            </button>
        </>
    );
};
