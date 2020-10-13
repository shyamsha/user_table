import React, { Component, Dispatch, Fragment } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../../store";
import User from "../views/User";
import { userRequest } from "./actions";
import { UserParams, Users } from "./types";
import ArrowBackIosTwoToneIcon from "@material-ui/icons/ArrowBackIosTwoTone";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import styled from "styled-components";
import SwitchBox from "../views/SwitchBox";

interface PropsFromState {
  loading: boolean;
  users: Users;
  errors: { user?: string };
}

interface PropsDispatchFromState {
  onUserRequest: typeof userRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  page: number;
  checked: boolean;
}

class Dashboard extends Component<AllProps, State> {
  state: State = {
    page: 1,
    checked: false,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ checked: event.target.checked });
  };

  prev = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.props.onUserRequest({ page: this.state.page });
    });
  };

  next = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.onUserRequest({ page: this.state.page });
    });
  };

  componentDidMount() {
    this.props.onUserRequest({ page: this.state.page });
  }

  render() {
    const { users, loading } = this.props;
    if (users !== null && loading) {
      return (
        <div style={{ textAlign: "center", padding: "5rem" }}>Loading...</div>
      );
    }
    return (
      <Fragment>
        <div style={{ padding: "3rem 2rem" }}>
          <Container>
            <div style={{display:"flex",alignItems:"center"}}>
              <div>
                {this.state.page} of {users !== null && users.total_pages}
              </div>
              <div>
              <ArrowBackIosTwoToneIcon
                style={{
                  paddingRight: "4px",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={
                  users !== null && users.page > 1 ? this.prev : () => null
                }
              />
              <ArrowForwardIosIcon
                style={{
                  paddingRight: "4px",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={this.next}
              />
              </div>
            </div>
            <div style={{ paddingLeft: "20rem" }}>
              <SwitchBox
                checked={this.state.checked}
                handleChange={this.handleChange}
              />
            </div>
          </Container>
          {users !== null && users.data && <User users={users} check={this.state.checked} />}
        </div>
      </Fragment>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
`;

const mapStateToProps: any = ({ users }: ApplicationState) => ({
  loading: users.loading,
  users: users.users,
  errors: users.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onUserRequest: (params: UserParams) => dispatch(userRequest(params)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Dashboard);
