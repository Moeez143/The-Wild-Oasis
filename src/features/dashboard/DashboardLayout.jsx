import React from "react";
import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecenStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();

  if (isLoading1 || isLoading2) return <Spinner />;

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
