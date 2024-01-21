import Close from "../../assets/svg/resources/x.svg";
import { useCallback, useEffect, useState } from "react";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-dark-2/70 
          backdrop-blur-sm
        "
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${
              showModal
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-dark-2
              border-dark-3
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b
                border-dark-3
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    font-bold
                    transition
                    absolute
                    left-9
                    group
                  "
                  onClick={handleClose}
                >
                  <img
                    src={Close}
                    alt="close"
                    className="w-3 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </button>
                <div className="text-lg font-semibold text-light-1">
                  {title}
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto text-light-1/75">
                {body}
              </div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      text={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button text={actionLabel} onClick={handleSubmit} />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
