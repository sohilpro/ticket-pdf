<template>
  <section class="mx-5 my-5">
    <button
      :disabled="loading"
      @click="download"
      class="bg-blue-500 text-white px-5 flex gap-2 transition-all py-3 rounded-lg mb-5"
      :class="{ 'opacity-50': loading }"
    >
      Receive tickets as PDF
      <svg
        v-if="loading"
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity="0.25"
        />
        <path
          fill="currentColor"
          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        >
          <animateTransform
            attributeName="transform"
            dur="0.75s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </path>
      </svg>
    </button>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="bg-wite flex gap-3 flex-col">
        <div class="flex bg-blue-500 text-white rounded-xl px-5 py-4">
          <div class="flex flex-col gap-2 text-xl">
            <p>if You Want to Go Far, Go Together</p>

            <div class="flex gap-2.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m221.59 160.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.24 54.24 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210"
                />
              </svg>
              <span> +964 708 814 3063 </span>
            </div>
          </div>
        </div>

        <div class="border rounded-xl p-3 flex flex-col gap-4">
          <h3 class="text-xl font-bold">Ticket detail</h3>

          <div
            class="grid gap-x-10 md:grid-rows-4 md:grid-cols-2 text-gray-500"
          >
            <div class="flex justify-between">
              <span> Date of birth: </span>
              <div class="basis-1/4" v-if="showInputs.birth_date">
                <FormKit
                  type="datepicker"
                  name="birth_date"
                  @blur="showInputs.birth_date = false"
                  v-model="data.birth_date"
                  placeholder="Date of closing"
                  overlay
                  popover
                  value-format="MMM DD YYYY"
                  value-locale="en"
                  value="Feb 28 2019"
                />
              </div>

              <span
                v-if="!showInputs.birth_date"
                @click="showInputs.birth_date = true"
                class="font-semibold"
              >
                {{ data.birth_date }}
              </span>
            </div>
            <div class="flex justify-between">
              <span> Expiration of passport: </span>
              <div class="basis-1/4" v-if="showInputs.expire_date_passport">
                <FormKit
                  type="datepicker"
                  name="expire_date_passport"
                  @blur="showInputs.expire_date_passport = false"
                  v-model="data.expire_date_passport"
                  placeholder="Date of closing"
                  overlay
                  popover
                  value-format="MMM DD YYYY"
                  value-locale="en"
                  value="Feb 28 2019"
                />
              </div>

              <span
                class="font-semibold"
                v-if="!showInputs.expire_date_passport"
                @click="showInputs.expire_date_passport = true"
              >
                {{ data.expire_date_passport }}
              </span>
            </div>
            <div class="flex justify-between">
              <span> Ticket ID: </span>
              <div class="w-[40%]" v-if="showInputs.ticket_id">
                <FormKit
                  type="number"
                  number="integer"
                  @blur="showInputs.ticket_id = false"
                  @keydown.enter="showInputs.ticket_id = false"
                  v-model="data.ticket_id"
                  name="ticket_id"
                  max="10"
                />
              </div>

              <span
                class="font-semibold"
                v-if="!showInputs.ticket_id"
                @click="showInputs.ticket_id = true"
              >
                {{ data.ticket_id }}
              </span>
            </div>
            <div class="flex justify-between">
              <span> Nationality: </span>
              <div class="w-[40%]" v-if="showInputs.nationality">
                <FormKit
                  type="text"
                  @blur="showInputs.nationality = false"
                  @keydown.enter="showInputs.nationality = false"
                  v-model="data.nationality"
                  name="nationality"
                />
              </div>

              <span
                class="font-semibold"
                v-if="!showInputs.nationality"
                @click="showInputs.nationality = true"
              >
                {{ data.nationality }}
              </span>
            </div>
            <div class="flex justify-between">
              <span> Gender: </span>

              <div class="w-[40%]" v-if="showInputs.gender">
                <FormKit
                  type="togglebuttons"
                  @blur="showInputs.gender = false"
                  v-model="data.gender"
                  name="gender"
                  enforced
                  :options="['male', 'female']"
                />
              </div>

              <span
                class="font-semibold"
                v-if="!showInputs.gender"
                @click="showInputs.gender = true"
              >
                {{ data.gender }}
              </span>
            </div>
            <div class="flex justify-between">
              <span> PIS: </span>

              <span class="font-semibold"> mmm </span>
            </div>
            <div class="flex justify-between">
              <span> First Name: </span>
              <div class="w-[40%]" v-if="showInputs.first_name">
                <FormKit
                  type="text"
                  @blur="showInputs.first_name = false"
                  @keydown.enter="showInputs.first_name = false"
                  v-model="data.first_name"
                  name="first_name"
                />
              </div>

              <span
                class="font-semibold"
                v-if="!showInputs.first_name"
                @click="showInputs.first_name = true"
              >
                {{ data.first_name }}
              </span>
            </div>
            <div class="flex justify-between">
              <span> Last Name: </span>
              <div class="w-[40%]" v-if="showInputs.last_name">
                <FormKit
                  type="text"
                  @blur="showInputs.last_name = false"
                  @keydown.enter="showInputs.last_name = false"
                  v-model="data.last_name"
                  name="last_name"
                />
              </div>

              <span
                class="font-semibold"
                v-if="!showInputs.last_name"
                @click="showInputs.last_name = true"
              >
                {{ data.last_name }}
              </span>
            </div>
            <div class="flex justify-between">
              <span> Passport Number: </span>
              <div class="w-[40%]" v-if="showInputs.passport_number">
                <FormKit
                  type="number"
                  number="integer"
                  @blur="showInputs.passport_number = false"
                  @keydown.enter="showInputs.passport_number = false"
                  v-model="data.passport_number"
                  name="passport_number"
                  max="8"
                />
              </div>

              <span
                class="font-semibold"
                v-if="!showInputs.passport_number"
                @click="showInputs.passport_number = true"
              >
                {{ data.passport_number }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <div
            class="bg-blue-500 flex flex-col justify-center gap-1 py-10 rounded-l-xl text-white text-xl font-bold"
          >
            <span class="-rotate-90">Flight</span>
            <span class="-rotate-90"> Go </span>
          </div>

          <div
            class="border bg-gray-50 rounded-r-xl py-3 px-5 w-full h-full flex justify-between flex-col"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-gray-500"> Flight number: </span>
                <div class="w-[40%]" v-if="showInputs.flight_number">
                  <FormKit
                    type="number"
                    number="integer"
                    @blur="showInputs.flight_number = false"
                    @keydown.enter="showInputs.flight_number = false"
                    v-model="data.flight_number"
                    name="flight_number"
                    max="8"
                  />
                </div>

                <span
                  class="font-medium"
                  v-if="!showInputs.flight_number"
                  @click="showInputs.flight_number = true"
                >
                  {{ data.flight_number }}
                </span>
              </div>

              <span> economy </span>
            </div>

            <div class="flex justify-between">
              <div class="flex flex-col">
                <div class="flex items-center gap-2">
                  <div class="w-[40%]" v-if="showInputs.origin_time">
                    <FormKit
                      @blur="showInputs.origin_time = false"
                      @keydown.enter="showInputs.origin_time = false"
                      v-model="data.origin_time"
                      type="time"
                      name="origin_time"
                    />
                  </div>

                  <span
                    class="text-3xl font-bold"
                    v-if="!showInputs.origin_time"
                    @click="showInputs.origin_time = true"
                  >
                    {{ data.origin_time }}
                  </span>

                  <div class="w-[40%]" v-if="showInputs.origin_date">
                    <FormKit
                      type="datepicker"
                      name="origin_date"
                      @blur="showInputs.origin_date = false"
                      v-model="data.origin_date"
                      placeholder="Date of closing"
                      overlay
                      popover
                      value-format="DD/MMM/YYYY"
                      value-locale="en"
                    />
                  </div>
                  <span
                    class="text-gray-500"
                    v-if="!showInputs.origin_date"
                    @click="showInputs.origin_date = true"
                  >
                    {{ data.origin_date }}
                  </span>
                </div>

                <p class="text-sm text-gray-500">
                  <div class="w-auto" v-if="showInputs.origin">
                <FormKit
                  type="text"
                  @blur="showInputs.origin = false"
                  @keydown.enter="showInputs.origin = false"
                  v-model="data.origin"
                  name="origin"
                  input-class="text-sm"
                />
              </div>
                  <span  v-if="!showInputs.origin"
                  @click="showInputs.origin = true">{{ data.origin }}</span> -   
                  <div class="w-auto" v-if="showInputs.origin_airport">
                <FormKit
                  type="text"
                  @blur="showInputs.origin_airport = false"
                  @keydown.enter="showInputs.origin_airport = false"
                  v-model="data.origin_airport"
                  name="origin_airport"
                  input-class="text-sm"
                />
              </div> 
              <span v-if="!showInputs.origin_airport"
                  @click="showInputs.origin_airport = true">
                    {{ data.origin_airport }}
                  </span>
                </p>
              </div>
              
              <div
                class="flex flex-col text-gray-500 items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61l-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 0 1 0 .15a15 15 0 0 0-.53 1.58L15.86 352h51.78l45.45-55l96.77 2.17L135.24 464h63l133-161.75l57.77 1.54c4.29.23 16 .31 18.66.31c24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48m-71.29 87.9"
                  />
                </svg>

                <span class="text-sm"> nonstop </span>
              </div>

              <div class="flex flex-col">
                <div class="flex items-center gap-2">
                  <div class="w-[40%]" v-if="showInputs.destination_date">
                    <FormKit
                      type="datepicker"
                      name="destination_date"
                      @blur="showInputs.destination_date = false"
                      v-model="data.destination_date"
                      placeholder="Date of closing"
                      overlay
                      popover
                      value-format="DD/MMM/YYYY"
                      value-locale="en"
                    />
                  </div>
                  <span
                    class="text-gray-500"
                    v-if="!showInputs.destination_date"
                    @click="showInputs.destination_date = true"
                  >
                    {{ data.destination_date }}
                  </span>
                 
                  <div class="w-[40%]" v-if="showInputs.destination_time">
                    <FormKit
                      @blur="showInputs.destination_time = false"
                      @keydown.enter="showInputs.destination_time = false"
                      v-model="data.destination_time"
                      type="time"
                      name="destination_time"
                    />
                  </div>

                  <span
                    class="text-3xl font-bold"
                    v-if="!showInputs.destination_time"
                    @click="showInputs.destination_time = true"
                  >
                    {{ data.destination_time }}
                  </span>
                </div>

                <p class="text-sm text-gray-500">
                  <div class="w-auto" v-if="showInputs.destination">
                <FormKit
                  type="text"
                  @blur="showInputs.destination = false"
                  @keydown.enter="showInputs.destination = false"
                  v-model="data.destination"
                  name="destination"
                  input-class="text-sm"
                />
              </div>
                  <span  v-if="!showInputs.destination"
                  @click="showInputs.destination = true">{{ data.destination }}</span> -   <div class="w-auto" v-if="showInputs.destination_airport">
                <FormKit
                  type="text"
                  @blur="showInputs.destination_airport = false"
                  @keydown.enter="showInputs.destination_airport = false"
                  v-model="data.destination_airport"
                  name="destination_airport"
                  input-class="text-sm"
                />
              </div> <span v-if="!showInputs.destination_airport"
                  @click="showInputs.destination_airport = true">
                    {{ data.destination_airport }}
                  </span>
                </p>
              </div>
            </div>

            <div class="flex items-center text-sm justify-between">
              <div class="flex items-center gap-2">
                <div class="w-60" v-if="showInputs.airline_logo">
                  <FormKit
                    type="dropdown"
                    name="airline_logo"
                    @blur="showInputs.airline_logo = false"
                    :value="airlines[0].value"
                    placeholder="select logo"
                    :options="airlines"
                    v-model="data.airline_logo"
                  >
                    <template #option="{ option, classes }">
                      <div :class="`${classes.option} flex items-center`">
                        <img
                          :src="option.value"
                          alt="optionAvatar"
                          class="w-10 mr-1 rounded-full"
                        />
                        <span class="ml-2">
                          {{ option.label }}
                        </span>
                      </div>
                    </template>
                  </FormKit>
                </div>

                <div
                  v-if="!showInputs.airline_logo"
                  @click="showInputs.airline_logo = true"
                  class="w-10 h-10 border rounded-full"
                >
                  <img :src="data.airline_logo" alt="logo" />
                </div>

                <span v-if="!showInputs.airline_logo"
                >
                  {{ data.air_name }}
                  <!-- <div class="w-auto" v-if="showInputs.origin_air">
                <FormKit
                  type="text"
                  @blur="showInputs.origin_air = false"
                  @keydown.enter="showInputs.origin_air = false"
                  v-model="data.origin_air"
                  name="origin_air"
                  input-class="text-sm"
                />
              </div> <span v-if="!showInputs.origin_air"
                  @click="showInputs.origin_air = true">
                    {{ data.origin_air }}
                  </span> -->
                  <!-- -  -->
                  <!-- <div class="w-auto" v-if="showInputs.destination_air">
                <FormKit
                  type="text"
                  @blur="showInputs.destination_air = false"
                  @keydown.enter="showInputs.destination_air = false"
                  v-model="data.destination_air"
                  name="destination_air"
                  input-class="text-sm"
                />
              </div> 
              <span v-if="!showInputs.destination_air"
                  @click="showInputs.destination_air = true">
                    {{ data.destination_air }}
                  </span> -->
                </span>
              </div>

              <div class="flex items-center gap-2">
                <span>Two packages (20 kg each)</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 20V7C18 6.4477 17.5523 6 17 6H5C4.44771 6 4 6.4477 4 7V19C4 19.5523 4.44771 20 5 20H18Z"
                    stroke="#605D64"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 6V20"
                    stroke="#605D64"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M14 6V19"
                    stroke="#605D64"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M14 6V3C14 2.44771 13.5523 2 13 2H9C8.4477 2 8 2.44771 8 3V6"
                    stroke="#605D64"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.5 20V22"
                    stroke="#605D64"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M16 20V22"
                    stroke="#605D64"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="border rounded-xl py-4 px-6 flex gap-5 flex-col">
          <div class="flex flex-col gap-2.5">
            <h3 class="font-bold text-xl">Important nots</h3>

            <p class="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { airlines } = await import("~/assets/json/airlines.json");

const loading = ref(false);
const basePdf = ref(null);

const showInputs = reactive({
  birth_date: false,
  ticket_id: false,
  expire_date_passport: false,
  nationality: false,
  gender: false,
  pis: false,
  first_name: false,
  last_name: false,
  passport_number: false,
  flight_number: false,
  origin_time: false,
  destination_time: false,
  origin_date: false,
  origin: false,
  destination: false,
  origin_airport: false,
  destination_date: false,
  destination_airport: false,
  origin_air: false,
  destination_air: false,
  airline_logo: false,
});
const data = reactive({
  birth_date: "Feb 28 2019",
  ticket_id: 2589746234,
  expire_date_passport: "Feb 28 2019",
  nationality: "iran",
  gender: "male",
  pis: 2020,
  first_name: "sample_name",
  last_name: "sample_last",
  passport_number: 35795145,
  flight_number: 3579166885145,
  origin_time: "10:00",
  destination_time: "10:00",
  origin_date: "23/sep/2023",
  destination_date: "23/sep/2023",
  origin: "Tehran",
  destination: "Shiraz",
  origin_airport: "Imam Khomeini",
  destination_airport: "Imam Khomeini",
  destination_air: "IMK Air",
  origin_air: "IMK Air",
  country: "Iran",
  airline_logo: airlines[0].value,
  air_name: airlines[0].label,
});

const findAirName = () => {
  const air_name = airlines.find((i) => i.value == data.airline_logo);
  data.air_name = air_name.label;
};

watch(data, () => {
  showInputs.gender = false;
  showInputs.airline_logo = false;
  findAirName();
});

const download = async () => {
  loading.value = true;
  try {
    const dataResponse = await $fetch("/api/pdf/export-pdf", {
      method: "POST",
      body: {
        data: [data],
      },
    });

    basePdf.value = dataResponse;

    downloadPdf();
  } catch (error) {
    console.error("Error render PDF:", error.message);
  } finally {
    loading.value = false;
  }
};

const downloadPdf = () => {
  const linkSource = `data:application/pdf;base64,${basePdf.value}`;
  const downloadLink = document.createElement("a");
  const fileName = "test.pdf";
  downloadLink.style.display = "hidden";
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};
</script>

<style scoped>
:deep(.formkit-dropdownWrapper){
  @apply !max-h-[200px]
}
</style>