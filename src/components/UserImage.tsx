import { Box } from "@mui/material";

interface IUserImageProps {
  picturePath: string;
  size?: string;
}

const UserImage = ({ picturePath, size = "60px" }: IUserImageProps) => {
  return (
    <Box width={size} height={size}>
      <img
        src="./assets/p3.jpeg"
        alt="noreferrer noprovider"
        width={size}
        height={size}
        style={{ objectFit: "cover", borderRadius: "50%" }}
      />
    </Box>
  );
};

export default UserImage;
