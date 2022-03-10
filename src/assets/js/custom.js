function saveDocument() {
    TXTextControl.saveDocument(TXTextControl.StreamType.HTMLFormat,
        function (e) {
            alert(atob(e.data));
        });
}

function loadDocument() {
    TXTextControl.loadDocument(TXTextControl.StreamType.HTMLFormat,
        btoa('<strong>Test</strong>'));
        TXTextControl.tables.add(3, 3)
}

let checked = true; 

function ischecked() {
    console.log('xxx')
    checked = !checked;
        console.log(checked);
        return checked;
}

function toggleVerticalRuler() {
    TXTextControl.showVerticalRuler(ischecked())
}

function textEditor() {

    console.log('asfdf')

    //Add a header

    TXTextControl.HeaderFooterCollection.add(TXTextControl.HeaderFooterType.Header);

    TXTextControl.HeaderFooterCollection.Add(TXTextControl.HeaderFooterType.Header)
    var header = TXTextControl.HeaderFooterCollection.getItem(TXTextControl.HeaderFooterType.Header)

    console.log(header)

    header.Selection.Text = 'hi'

    TXTextControl.tables.add(3, 3)
 
    
  }

  //Hide Header and footer
  function toggleRibbonElement()
  {
    //Hide Header
    document.getElementById("ribbonTabInsert_drpDnBtnInsertHeader" ).style.pointerEvents= 'none'

    //Hide Footer
    document.getElementById("ribbonTabInsert_drpDnBtnInsertFooter" ).style.pointerEvents= 'none'
  }
  


 
  


    
