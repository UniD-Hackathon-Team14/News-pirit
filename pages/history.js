import React, { useEffect, useState, useCallback } from "react";
import Navigator from "../src/components/common/navigator";
import { PageHistory } from "../src/components/history";

export default function History() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <PageHistory />
      <Navigator />
    </div>
  );
}
