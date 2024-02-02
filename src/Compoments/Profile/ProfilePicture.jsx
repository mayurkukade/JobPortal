import React from "react";
import { useauthHooks } from "../hooks/authHooks";
import { Avatar } from "@material-tailwind/react";
import { useGetDocumentQuery } from "../../services/fileUplaod/uploadFile";
const ProfilePicture = () => {
  const { useDecode } = useauthHooks();
  console.log(useDecode);

  const userId = useDecode?.userId;
  const fileType = "profile";
  const { data, isLoading, isSuccess, isError } = useGetDocumentQuery({
    userId,
    fileType,
  });

  console.log(data);

  let fetchedProfile;
  if (isLoading) {
    fetchedProfile = <p>...</p>;
  } else if (isError) {
    fetchedProfile = <p>❌</p>;
  } else if (isSuccess) {
    fetchedProfile = data?.response[0].documentLink;
  }
  return (
    <>
      <Avatar
        variant="circular"
        src={fetchedProfile}
        alt="avatar"
        withBorder={true}
        className="p-0.5"
        size="xxl"
      />
    </>
  );
};

export default ProfilePicture;
