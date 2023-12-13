import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark" | "btn_light";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  type,
  title,
  icon,
  variant,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`inline rounded-md font-medium cursor-pointer w-min px-[16px] py-[12px] hover:shadow-md transition duration-100 ease-in-out ${variant}`}
      onClick={onClick}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};
