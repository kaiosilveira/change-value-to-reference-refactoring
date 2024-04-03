[![Continuous Integration](https://github.com/kaiosilveira/refactoring-catalog-template/actions/workflows/ci.yml/badge.svg)](https://github.com/kaiosilveira/refactoring-catalog-template/actions/workflows/ci.yml)

# Refactoring catalog repository template

This is a quick template to help me get a new refactoring repo going.

## Things to do after creating a repo off of this template

1. Run `yarn tools:cli prepare-repository -r <repo_name>`. It will:

- Update the `README.md` file with the actual repository name, CI badge, and commit history link
- Update `package.json` with the repository's name and remote URL
- Update the repo's homepage on GitHub with:
  - A description
  - A website link to https://github.com/kaiosilveira/refactoring
  - The following labels: javascript, refactoring, [REPOSITORY_NAME]

2. Replace the lorem ipsum text sections below with actual text

## Useful commands

- Generate markdown containing a diff with patch information based on a range of commits:

```bash
yarn tools:cli generate-diff -f <first_commit_sha> -l <last_commit_sha>
```

- To generate the commit history table for the last section, including the correct links:

```bash
yarn tools:cli generate-cmt-table -r [REPOSITORY_NAME]
```

---

ℹ️ _This repository is part of my Refactoring catalog based on Fowler's book with the same title. Please see [kaiosilveira/refactoring](https://github.com/kaiosilveira/refactoring) for more details._

---

# Refactoring name

**Formerly: Old name**

<table>
<thead>
<th>Before</th>
<th>After</th>
</thead>
<tbody>
<tr>
<td>

```javascript
result = initial.code;
```

</td>

<td>

```javascript
result = newCode();

function newCode() {
  return 'new code';
}
```

</td>
</tr>
</tbody>
</table>

**Inverse of: [Another refactoring](https://github.com/kaiosilveira/refactoring)**

**Refactoring introduction and motivation** dolore sunt deserunt proident enim excepteur et cillum duis velit dolor. Aute proident laborum officia velit culpa enim occaecat officia sunt aute labore id anim minim. Eu minim esse eiusmod enim nulla Lorem. Enim velit in minim anim anim ad duis aute ipsum voluptate do nulla. Ad tempor sint dolore et ullamco aute nulla irure sunt commodo nulla aliquip.

## Working example

**Working example general explanation** proident reprehenderit mollit non voluptate ea aliquip ad ipsum anim veniam non nostrud. Cupidatat labore occaecat labore veniam incididunt pariatur elit officia. Aute nisi in nulla non dolor ullamco ut dolore do irure sit nulla incididunt enim. Cupidatat aliquip minim culpa enim. Fugiat occaecat qui nostrud nostrud eu exercitation Lorem pariatur fugiat ea consectetur pariatur irure. Officia dolore veniam duis duis eu eiusmod cupidatat laboris duis ad proident adipisicing. Minim veniam consectetur ut deserunt fugiat id incididunt reprehenderit.

### Test suite

Occaecat et incididunt aliquip ex id dolore. Et excepteur et ea aute culpa fugiat consectetur veniam aliqua. Adipisicing amet reprehenderit elit qui.

```javascript
describe('functionBeingRefactored', () => {
  it('should work', () => {
    expect(0).toEqual(1);
  });
});
```

Magna ut tempor et ut elit culpa id minim Lorem aliqua laboris aliqua dolor. Irure mollit ad in et enim consequat cillum voluptate et amet esse. Fugiat incididunt ea nulla cupidatat magna enim adipisicing consequat aliquip commodo elit et. Mollit aute irure consequat sunt. Dolor consequat elit voluptate aute duis qui eu do veniam laborum elit quis.

### Steps

**Step 1 description** mollit eu nulla mollit irure sint proident sint ipsum deserunt ad consectetur laborum incididunt aliqua. Officia occaecat deserunt in aute veniam sunt ad fugiat culpa sunt velit nulla. Pariatur anim sit minim sit duis mollit.

```diff
diff --git a/src/price-order/index.js b/src/price-order/index.js
@@ -3,6 +3,11 @@
-module.exports = old;
+module.exports = new;
```

**Step n description** mollit eu nulla mollit irure sint proident sint ipsum deserunt ad consectetur laborum incididunt aliqua. Officia occaecat deserunt in aute veniam sunt ad fugiat culpa sunt velit nulla. Pariatur anim sit minim sit duis mollit.

```diff
diff --git a/src/price-order/index.js b/src/price-order/index.js
@@ -3,6 +3,11 @@
-module.exports = old;
+module.exports = new;
```

And that's it!

### Commit history

Below there's the commit history for the steps detailed above.

| Commit SHA                                                                  | Message                  |
| --------------------------------------------------------------------------- | ------------------------ |
| [cmt-sha-1](https://github.com/kaiosilveira/[REPOSITORY_NAME]/commit-SHA-1) | description of commit #1 |
| [cmt-sha-2](https://github.com/kaiosilveira/[REPOSITORY_NAME]/commit-SHA-2) | description of commit #2 |
| [cmt-sha-n](https://github.com/kaiosilveira/[REPOSITORY_NAME]/commit-SHA-n) | description of commit #n |

For the full commit history for this project, check the [Commit History tab](https://github.com/kaiosilveira/[REPOSITORY_NAME]/commits/main).
