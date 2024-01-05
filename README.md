1. Install PNPM by running a Powershell terminal `iwr https://get.pnpm.io/install.ps1 -useb | iex`

2. Install NX as a global tool `pnpm add nx -g`

3. Install NX workspace as a global tool `pnpm add create-nx-workspace -g`

4. Create a new PNPM workspace `pnpm init` and it will generate a new _package.json_

5. We can remove the _main_ and _scripts_ properties from the _package.json_ as this is in the root of the mono-repo and apps will have their own _package.json_

6. Create folders named _apps_ and _libs_ in the root

7. Create an empty file and call it _pnpm-workspace.yaml_, then put the following contents in it:

```
packages:
    - 'apps/*'
    - 'libs/*'
```
