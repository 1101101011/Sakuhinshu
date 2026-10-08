{
  description = "Node.js Dev Environment";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };
  outputs =
    {
      self,
      nixpkgs,
    }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };
    in
    {
      devShells.x86_64-linux.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_24
          prettier
          eslint
          eslint_d
          prettierd
          vue-language-server
          vtsls
          typescript-language-server
          vscode-langservers-extracted
        ];
        shellHook = ''
          echo "Welcome to the Node.js development environment!"
        '';
      };
    };
}
