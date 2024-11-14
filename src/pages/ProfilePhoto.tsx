import TopHeader from "@/components/TopHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

function ProfilePhoto() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-account/interests");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <TopHeader></TopHeader>

      <div
        style={{
          width: 330,
          height: 704,
          padding: 10,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 6,
          display: "flex",
        }}
      >
        <div
          style={{
            width: 167,
            height: 52,
            fontSize: 36,
            fontFamily: "Inter",
            fontWeight: "900",
            alignItems: "center",
            wordWrap: "break-word",
          }}
        >
          PROFILE
        </div>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <text>name:</text>
          <input
            style={{
              backgroundColor: "#F3F3F3",
              height: "50px",
              borderRadius: "30px",
              paddingLeft: "25px",
            }}
          />
        </form>
        <text>upload profile picture:</text>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input id="picture" type="file" />
        </div>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <text>bio:</text>
          <input
            type="text"
            style={{
              backgroundColor: "#F3F3F3",
              height: "50px",
              borderRadius: "30px",
              paddingLeft: "25px",
            }}
          />
        </form>
      </div>
      <div
        style={{
          width: "100%",
          height: 139,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          background: "#FFFAEA",
          borderRadius: 20,
          overflow: "hidden",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div style={{ width: 144, height: "50%", position: "relative" }}>
          <Button
            style={{
              backgroundColor: "#EFCA47",
              borderRadius: "30px",
              boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            onClick={handleClick}
          >
            continue →
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProfilePhoto;
