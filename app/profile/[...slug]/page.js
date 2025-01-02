const Profile = async ({ params }) => {
  const { slug } = await params;
  const vsm = slug[0];
  const area = slug[1];
  const roomId = slug[2];
  return (
    <div>
      VSM {vsm} - area {area} - room id {roomId}
    </div>
  );
};

export default Profile;
