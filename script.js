$("document").ready(() => {
  getData();
});

const url =
  "https://parsehub.com/api/v2/runs/thiN5z7UADiT/data?api_key=tiPLgCrZTUpF";

function getData() {
  $.ajax({
    url: url,
    method: "GET",
  }).done(function (data) {
    console.log(data);
  });
}
