const express = require("express");
const cors = require("cors");
const axios = require("axios");
const https = require("https");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// app.use(cors());

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Get is not supported" });
// });

/*
 * - Get parcels by tracking id -> /parcels/yal-123456 or /parcel/?tracking=yal1,yal2
 * - Retrieve specific parcels fields -> /parcel/?fields=field1, fiels2
 * - Retrieve
 * - The easiest solution is to pass a request tail parameter in the body of the request, then add it to the link.
 * - in this way, we don't have to recreate a completely new API.
 */
app.post("/histories", async (req, res) => {
  try {
    const extension = req.body.extension;
    console.log(extension);
    const resp = await axios.get(
      `https://api.yalidine.app/v1/histories/${extension}`,
      {
        headers: {
          "X-API-ID": "92129974643421801058",
          "X-API-TOKEN":
            "JyWPYR7SpCZlWMSO4rQKcqrPAzNwmftAMdv49z07EVtwlTU3aBVNaFF2GLes2uoH",
        },
      }
    );
    res.status(200).json({ data: resp.data });
  } catch (err) {
    // Handle Error Here
    console.error(err);
    res.status(401).json({ error: err });
  }
});
app.post("/delete", async (req, res) => {
  try {
    const tracking = req.body.tracking;
    console.log(tracking);
    const resp = await axios.delete(
      `https://api.yalidine.app/v1/parcels/${tracking}`,
      {
        headers: {
          // "X-API-ID": "73837800271119345844",
          // "X-API-TOKEN":
          //   "W1CdymI0FqqBVDfGN1YfvWlK75v4oilX63ahP9TxFHh3rYTxGK8AAckdnnQHrBjb",
          "X-API-ID": "92129974643421801058",
          "X-API-TOKEN":
            "JyWPYR7SpCZlWMSO4rQKcqrPAzNwmftAMdv49z07EVtwlTU3aBVNaFF2GLes2uoH",
        },
      }
    );
    res.status(200).json({ data: resp.data });
  } catch (err) {
    // Handle Error Here
    console.error(err);
    res.status(401).json({ error: err });
  }
});
app.post("/", async (req, res) => {
  try {
    const extension = req.body.extension;
    console.log(extension);
    const resp = await axios.get(
      `https://api.yalidine.app/v1/parcels/${extension}`,
      {
        headers: {
          "X-API-ID": "92129974643421801058",
          "X-API-TOKEN":
            "JyWPYR7SpCZlWMSO4rQKcqrPAzNwmftAMdv49z07EVtwlTU3aBVNaFF2GLes2uoH",
          // "X-API-ID": "92129974643421801058",
          // "X-API-TOKEN":
          //   "JyWPYR7SpCZlWMSO4rQKcqrPAzNwmftAMdv49z07EVtwlTU3aBVNaFF2GLes2uoH",
        },
      }
    );
    res.status(200).json({ data: resp.data });
  } catch (err) {
    // Handle Error Here
    console.error(err);
    res.status(401).json({ error: err });
  }
});

app.post("/create", async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const phone = req.body.phone;
    const wilaya = req.body.wilaya;
    const commune = req.body.commune;
    const product = req.body.product;
    const isStopDesk = req.body.isStopDesk;
    const isFreeShipping = req.body.isFreeShipping;
    const stopdesk = +req.body.stopdesk;
    const price = req.body.price;
    const orderId = req.body.orderId;
    const url = "https://api.yalidine.app/v1/parcels/";
    console.log({
      order_id: `order_${orderId}`,
      firstname: firstName,
      familyname: lastName,
      contact_phone: phone,
      address: address,
      to_commune_name: commune,
      to_wilaya_name: wilaya,
      product_list: product,
      price: price,
      freeshipping: true,
      is_stopdesk: isStopDesk,
      stopdesk_id: stopdesk,
      has_exchange: 0,
      product_to_collect: null,
    });
    const data = [
      {
        order_id: `order_${orderId}`,
        firstname: firstName,
        familyname: lastName,
        contact_phone: phone,
        address: address,
        to_commune_name: commune,
        to_wilaya_name: wilaya,
        product_list: product,
        price: price,
        freeshipping: true,
        is_stopdesk: isStopDesk,
        stopdesk_id: stopdesk,
        do_insurance: false,
        declared_value: 5000,
        has_exchange: 0,
        product_to_collect: null,
      },
    ];

    const response = await axios.post(url, data, {
      headers: {
        "X-API-ID": "92129974643421801058",
        "X-API-TOKEN":
          "JyWPYR7SpCZlWMSO4rQKcqrPAzNwmftAMdv49z07EVtwlTU3aBVNaFF2GLes2uoH",
        "Content-Type": "application/json",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.get("/centers", async (req, res) => {
  try {
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const address = req.body.address;
    // const phone = req.body.phone;
    // const wilaya = req.body.wilaya;
    // const commune = req.body.commune;
    // const product = req.body.product;
    // const isStopDesk = req.body.isStopDesk;
    // const isFreeShipping = req.body.isFreeShipping;
    // const stopdesk = +req.body.stopdesk;
    // const price = req.body.price;
    // const orderId = req.body.orderId;
    const url = "https://api.yalidine.app/v1/centers/?page_size=200";
    const data = [
      {
        order_id: "order_13",
        firstname: "مصباح",
        familyname: "الواهم",
        contact_phone: "0540842804",
        address: "",
        to_commune_name: "Skikda",
        to_wilaya_name: "Skikda",
        from_wilaya_name: "Constantine",
        do_insurance: false,
        declared_value: 0,
        product_list: "chaussure_3_gris-souris_41x1",
        price: 4900,
        freeshipping: true,
        is_stopdesk: true,
        stopdesk_id: 213501,
        has_exchange: 0,
        product_to_collect: null,
      },
    ];

    const response = await axios.get(url, {
      headers: {
        "X-API-ID": "92129974643421801058",
        "X-API-TOKEN":
          "JyWPYR7SpCZlWMSO4rQKcqrPAzNwmftAMdv49z07EVtwlTU3aBVNaFF2GLes2uoH",
        "Content-Type": "application/json",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`connected sucessfully on port ${port}`);
});
