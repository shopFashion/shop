// import React from "react";
// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// // core components
// import GridItem from "components/Grid/GridItem.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import Table from "components/Table/Table.jsx";
// import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
// import CardBody from "components/Card/CardBody.jsx";

// const styles = {
//   cardCategoryWhite: {
//     "&,& a,& a:hover,& a:focus": {
//       color: "rgba(255,255,255,.62)",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       marginBottom: "0"
//     },
//     "& a,& a:hover,& a:focus": {
//       color: "#FFFFFF"
//     }
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: "#777",
//       fontSize: "65%",
//       fontWeight: "400",
//       lineHeight: "1"
//     }
//   }
// };


// function TableList(props) {
//   const { classes } = props;
//   return (
//     <GridContainer>
//       <GridItem xs={12} sm={12} md={12}>
//         <Card>
//           <CardHeader color="primary">
//             <h4 className={classes.cardTitleWhite}>Simple Table</h4>
//             <p className={classes.cardCategoryWhite}>
//               Here is a subtitle for this table
//             </p>
//           </CardHeader>
//           <CardBody>
//             <Table
//               tableHeaderColor="primary"
//               tableHead={["Name", "Country", "City", "Salary"]}
//               tableData={[
//                 // ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
//                 // ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
//                 // ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
//                 // ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
//                 // ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
//                 // ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                
//               ]}
//             />
//           </CardBody>
//         </Card>
//       </GridItem>
//       <GridItem xs={12} sm={12} md={12}>
//         <Card plain>
//           <CardHeader plain color="primary">
//             <h4 className={classes.cardTitleWhite}>
//               Table on Plain Background
//             </h4>
//             <p className={classes.cardCategoryWhite}>
//               Here is a subtitle for this table
//             </p>
//           </CardHeader>
//           <CardBody>
//             <Table
//               tableHeaderColor="primary"
//               tableHead={["ID", "Name", "Country", "City", "Salary"]}
//               tableData={[
//                 ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
//                 ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
//                 ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
//                 [
//                   "4",
//                   "Philip Chaney",
//                   "$38,735",
//                   "Korea, South",
//                   "Overland Park"
//                 ],
//                 [
//                   "5",
//                   "Doris Greene",
//                   "$63,542",
//                   "Malawi",
//                   "Feldkirchen in Kärnten"
//                 ],
//                 ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
//               ]}
//             />
//           </CardBody>
//         </Card>
//       </GridItem>
//     </GridContainer>
//   );
// }

// export default withStyles(styles)(TableList);
import React, { Component } from "react";
import axios from "axios";
import TableRow from "../TableList/TableList";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

  const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };
  }

  componentDidMount() {
    // if (this.props.isAuthenticated) {
    //   this.props.history.push("/");
    // } else {
    axios
      .get("http://localhost:3030/users/api/getall")
      .then((response) => {
        console.log(response.data);
        this.setState({ persons: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
  }

  tabRow() {
    return this.state.persons.map((object, i) => {
      return <TableRow obj={object} key={i} />;
    });

    // return this.state.persons.map(function (object, i) {
    //   return <TableRow obj={object} key={i} />;
    // });
  }

  render() {
    
    //   <div>
    //     <h3 align="center">Persons List</h3>
    //     <table className="table table-striped" style={{ marginTop: 20 }}>
    //       <thead>
    //         <tr>
    //           <th>User Name</th>
    //           <th>Email</th>
    //           <th>IsVerify</th>
    //           <th colSpan="2">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>{this.tabRow()}</tbody>
    //     </table>
    //   </div>
    const { classes } = this.props;
      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Simple Table</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p>
              </CardHeader>
              <CardBody>
              <table className="table table-striped" style={{ margin: 20 }}>
          <thead>
            <tr style={{ margin: 20 }}>
              <th >User Name</th>
              <th>Email</th>
              <th>IsVerify</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
                {/* <Table
                  tableHeaderColor="primary"
                  tableHead={["Name", "Country", "City", "Salary"]}
                  tableData={
                      [this.tabRow()]
                    // ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                    // ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                    // ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                    // ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                    // ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                    // ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                    
                  }
                /> */}
                
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <CardHeader plain color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Table on Plain Background
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Name", "Country", "City", "Salary"]}
                  tableData={[
                    // ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                    // ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                    // ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                    // [
                    //   "4",
                    //   "Philip Chaney",
                    //   "$38,735",
                    //   "Korea, South",
                    //   "Overland Park"
                    // ],
                    // [
                    //   "5",
                    //   "Doris Greene",
                    //   "$63,542",
                    //   "Malawi",
                    //   "Feldkirchen in Kärnten"
                    // ],
                    // ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
                  ]}
                ></Table>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    
  }
};
export default withStyles(styles)(TableList);
