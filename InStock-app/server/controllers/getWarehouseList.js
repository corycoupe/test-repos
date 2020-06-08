const fs = require("fs");

const getWarehouseList = () => {
  const warehouseData = fs.readFileSync("./model/data.json");
  const warehouseArr = JSON.parse(warehouseData).map((data) => {
    return {
      warehouseId: data.warehouseId,
      warehouseName: data.warehouseName,
      PostalCode: data.PostalCode,
      location: data.location,
      contactName: data.contactName,
      contactRole: data.contactRole,
      contactNumber: data.contactNumber,
      contactEmail: data.contactEmail,

    };
  });
  return warehouseArr;
};

module.exports = getWarehouseList;
