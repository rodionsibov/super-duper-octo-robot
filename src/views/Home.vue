<template>
  <div class="home container">
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div class="filter flex" @click="toggleFilterMenu">
          <span>Filter by status</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
    };
  },
  methods: {
    newInvoice() {},
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;
    }

    .button,
    .filter {
      align-items: center;

      span {
        font-size: 12px;
      }
    }

    .filter {
      cursor: pointer;
      position: relative;
      margin-right: 40px;

      svg {
        margin-left: 8px;
        width: 12px;
        color: #7c5dfa;
      }

      .filter-menu {
        width: 120px;
        position: absolute;
        top: 25px;
        list-style: none;
        background-color: #1e2139;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      li {
        cursor: pointer;
        font-size: 12px;
        padding: 10px 20px;

        &:hover {
          color: #1e2139;
          background-color: #fff;
        }
      }
    }

    .button {
      padding: 8px 10px;
      background-color: #7c5dfa;
      border-radius: 40px;

      .inner-button {
        margin-right: 8px;
        border-radius: 50%;
        padding: 6px;
        align-items: center;
        justify-content: center;
        background-color: #fff;

        svg {
          width: 14px;
          color: #7c5dfa;
        }
      }
    }
  }
}
</style>