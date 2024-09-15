import React from "react";
import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();

  if (isLoading) return <Spinner />;

  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <div>Stats</div>
      <div>Today Activites</div>
      <div>Chart Stay durations</div>
      <div>Charts sale</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
