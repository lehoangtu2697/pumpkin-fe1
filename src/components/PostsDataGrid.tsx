import DataGrid, {
  Column,
  Editing,
  Popup,
  Form,
  Paging,
  HeaderFilter,
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';

interface Post {
    id: number;
    title: string;
  }
  
  type PostsData = Post[] | null;

  function PostsDataGrid({ dataSource, ...rest }: { dataSource: PostsData; [key: string]: any }) {
    return (
      <DataGrid
        dataSource={dataSource}
        keyExpr="id"
        showBorders={true}
        wordWrapEnabled={true}
        {...rest}
    >
      <HeaderFilter visible={true} />
      <Paging defaultPageSize={10} />
      <Editing
        mode="popup"
        allowUpdating={true}
        allowAdding={true}
        allowDeleting={true}
      >
        <Popup title="Post" showTitle={true} width={700} height={300} />
        <Form>
          <Item itemType="group" colCount={1} colSpan={2}>
            <Item dataField="id" editorType="dxNumberBox" />
            <Item dataField="title" editorType="dxTextArea" />
          </Item>
        </Form>
      </Editing>
      <Column
        dataField="id"
        width={150}
        defaultSortOrder="desc"
        dataType="number"
        headerFilter={{allowSearch: true}}
      />
      <Column 
        dataField="title" 
        headerFilter={{allowSearch: true}}
      />
    </DataGrid>
  );
}

export default PostsDataGrid;
