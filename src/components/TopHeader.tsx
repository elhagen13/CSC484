const TopHeader = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 100,
          paddingLeft: 31,
          paddingRight: 31,
          paddingTop: 8,
          paddingBottom: 8,
          background: "#FFF5D0",
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div style={{ width: 78, height: 61, position: "relative" }}>
          <div
            style={{
              width: 78,
              height: "50%",
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <img src="/logo.svg" />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: 38 }} />
    </div>
  );
};
export default TopHeader;
