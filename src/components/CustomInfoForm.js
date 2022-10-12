import React, { useState } from "react";
import { IonContent, IonButton, IonPage, IonCheckbox, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, IonList, IonItemDivider, IonText, IonSelect, IonSelectOption, IonRow, IonGrid, IonCol, IonHeader } from "@ionic/react";
import axios from "axios";

const CustomInfoForm = () => {

  const options = [
    {
      label: ""
    }
  ]
  // const url = ("http://localhost:8082/user/create",person);

  const [data, setData] = useState({
   fullname:"",
   address1:"",
   address2:"",
   city:"",
   country:"",
   postcode:"",
  });
  const [check, setCheck] = useState(false)

  function submit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:8082/user/' ,{
        fullname: data.fullname,
        address1: data.address1,
        address2: data.address2,
        city:data.city,
        country: data.country,
        postcode: data.postcode,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle align-self-center>Customer Information Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={(e) => submit(e)}>
          <IonGrid>
            <IonRow className="User_Label_Section">
              <IonCol align-self-center size-md="6" size-lg="5" size-xs="12" size="12">
                <IonList className="form-border">
                  <IonText>
                    <h6 className="fs-5">Information</h6>
                  </IonText>
                  <IonLabel style={{ marginLeft: "20px" }} position="floating">
                    Full name of business
                  </IonLabel>
                  <IonItem lines="none">
                    <IonInput style={{ border: "1px solid black" }} type="text" name="fullname" value={data.fullname} onChange={(e) => handle(e)} required></IonInput>
                  </IonItem>
                  <IonText>
                    <h6 className="fs-5">Registered business Address</h6>
                  </IonText>

                  <IonLabel style={{ marginLeft: "20px" }} position="floating">
                    Address line 1
                  </IonLabel>
                  <IonItem lines="none">
                    <IonInput style={{ border: "1px solid black" }} type="text" name="address1" value={data.address1} onChange={(e) => handle(e)} required></IonInput>
                  </IonItem>

                  <IonLabel style={{ marginLeft: "20px" }} position="floating">
                    Address line 2(optional)
                  </IonLabel>
                  <IonItem lines="none">
                    <IonInput style={{ border: "1px solid black" }} type="text" name="address2" value={data.address2} onChange={(e) => handle(e)}></IonInput>
                  </IonItem>

                  <IonLabel style={{ marginLeft: "20px" }} position="floating">
                    City
                  </IonLabel>
                  <IonItem lines="none">
                    <IonInput style={{ border: "1px solid black" }} type="text" name="city" value={data.city} onChange={(e) => handle(e)} required></IonInput>
                  </IonItem>

                  <IonLabel style={{ marginLeft: "20px" }} position="floating">
                    Country
                  </IonLabel>
                  <IonItem lines="none">
                    <IonInput style={{ border: "1px solid black" }} type="text" name="country" value={data.country} onChange={(e) => handle(e)} required></IonInput>
                  </IonItem>

                  <IonLabel style={{ marginLeft: "20px" }} position="floating">
                    Postcode
                  </IonLabel>
                  <IonItem lines="none">
                    <IonInput style={{ border: "1px solid black" }} type="text" name="postcode" value={data.postcode} onChange={(e) => handle(e)} required></IonInput>
                  </IonItem>

                  <IonLabel style={{ marginLeft: "20px" }}>ID Upload</IonLabel>
                  <IonItem lines="none">
                    <IonInput style={{ border: "1px solid black" }} type="file"></IonInput>
                  </IonItem>
                  <IonText>
                    <h6>Preferred contact option</h6>
                  </IonText>
                  <IonItem style={{ border: "1px solid black" }}>
                    <IonSelect interface="popover" placeholder="Select">
                      <IonSelectOption value="email">Via Email</IonSelectOption>
                      <IonSelectOption value="call">Call</IonSelectOption>
                      <IonSelectOption value="post">By Post</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonItem>
                    <IonCheckbox slot="start" ></IonCheckbox>
                    <IonLabel>Tick the box to confirm that you hold the business</IonLabel>
                  </IonItem>
                  <IonRow align-self-center>
                    <IonCol>
                      <IonButton type="submit" color="warning" className="button-sub">
                        Complete
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonList>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default CustomInfoForm;
