:::mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#BB2528',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#7C0000',
      'lineColor': '#F8B229',
      'secondaryColor': '#006100',
      'tertiaryColor': '#666666'
    }
  }
}%%

flowchart LR;

    subgraph PixiNamespace ["Pixi Namespace"]
        classDef pixi fill:#0077cc,stroke:#0055aa,stroke-width:2px;


       
        PixiStage("Pixi.Stage"):::pixi -->|Contains| PixiContainer;

                PixiView("Pixi.View"):::pixi
            PixiSprite("Pixi.Sprite"):::pixi --> PixiView;
            PixiGraphics("Pixi.Graphics"):::pixi --> PixiView;
            PixiText("Pixi.Text"):::pixi --> PixiView;
            PixiContainer("Pixi.Container"):::pixi --> PixiView;
            PixiContainer("Pixi.Container"):::pixi;

            PixiApp("Pixi.Application"):::pixi -->|Contains| PixiStage;
    end
    
    subgraph GixiNamespace ["Gixi Namespace"]
        classDef gixi fill:#333,stroke:#aaa,stroke-width:2px;


        GixiSystems("Gixi.Systems"):::gixi;

        
        GixiAudioSystem("Gixi.AudioSystem"):::gixi --> GixiSystems;
        GixiCollisionSystem("Gixi.CollisionSystem"):::gixi --> GixiSystems;
        GixiInputSystem("Gixi.InputSystem"):::gixi --> GixiSystems;
        GixiMultiplayerSystem("Gixi.MultiplayerSystem"):::gixi --> GixiSystems;

        GixiApplication:::gixi -->|Contains| GixiSystems;
        GixiApplication("Gixi.GixiApplication"):::gixi --> PixiApp;
      
        GixiActorContainer("Gixi.ActorContainer"):::gixi --> PixiContainer;
        ActorStatic("Gixi.ActorStatic"):::gixi --> GixiActorContainer;
        ActorAnimated("Gixi.ActorAnimated"):::gixi --> GixiActorContainer;
        Tilemap("Gixi.Tilemap"):::gixi --> GixiActorContainer;

       
    end

    


:::
