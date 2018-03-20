<template>
<Table :data="TorrentInfo" :border="true" max-height="400" :default-sort = "{prop: 'date', order: 'descending'}" :highlight-current-row="false">
  <TableColumn prop="name" label="name">
    <template slot-scope="scope">
      <Tooltip class="name" effect="light" :content="scope.row.name" placement="left">
        <span>{{scope.row.name}}</span>
      </Tooltip>
    </template>
  </TableColumn>
  <TableColumn prop="size" label="size"  sortable></TableColumn>
  <TableColumn prop="date" label="date"  sortable></TableColumn>
  <TableColumn prop="detail" label="detail" >
    <template slot-scope="scope">
      <a :href="scope.row.detail" class="tag" target="view-window">detail</a>
    </template>
  </TableColumn>
  <TableColumn prop="download" label="download" >
    <template slot-scope="scope">
      <a :href="scope.row.download" ref="magnet" class="tag">download</a>
    </template>
  </TableColumn>
</Table>
</template>
<script>
import {Table, TableColumn, Tooltip} from 'element-ui'
export default {
  components: {
    Table,
    TableColumn,
    Tooltip
  },
  computed: {
    TorrentInfo: function () {
      return this.$store.state.torrents
    }
  },
  mounted: function () {
    this.$el.classList.remove('el-table--enable-row-hover')
  }
}
</script>
<style scoped>
  .tag{
    text-decoration: none;
    padding: 2px 10px;
    margin-left: 5px;
    font-family: 'Galdeano',sans-serif;
    background-color: rgba(191,214,87,0.4);
    font-size: 14px;
    color: #5a514c;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -moz-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    margin: 2px 0;
    margin-right: 5px;
    opacity: 1;
  }
  .name{
    cursor: pointer;
  }
</style>
<style>
  .el-table__body-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
