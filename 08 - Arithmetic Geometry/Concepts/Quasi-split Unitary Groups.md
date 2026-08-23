---
title: Quasi-split Unitary Groups
aliases:
  - Quasi-split unitary group
  - Quasi-split U_n
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-groups
  - unitary-groups
  - langlands
created: 2026-08-24
source: "Getz–Hahn, An Introduction to Automorphic Representations, GTM 300 (2024), Definition 1.9.2 and Example 7.3"
source_status: partially-verified
status: not-started
---

# Quasi-split Unitary Groups

## Definition

> [!info] Quasi-split reductive group
> Let $G$ be a reductive group over a field $F$. The group $G$ is **quasi-split over $F$** if it contains a Borel subgroup defined over $F$.
>
> Every split reductive group is quasi-split, but the converse need not hold. [S11, Definition 1.9.2, printed p. 33, PDF p. 50]

This definition is field-sensitive: a group may be non-quasi-split over $F$ but become split, hence quasi-split, after a field extension.

## Unitary Groups from a Quadratic Extension

Let $M/F$ be a quadratic field extension, or more generally a quadratic étale $F$-algebra, and let

$$
\sigma:M\longrightarrow M
$$

be its nontrivial $F$-automorphism. If $V$ is an $n$-dimensional $M$-vector space and $h$ is a nondegenerate Hermitian or skew-Hermitian form, its unitary group is the $F$-group

$$
U(h)(R)
=
\left\{
g\in\operatorname{GL}_{M\otimes_F R}(V\otimes_F R):
h(gv,gw)=h(v,w)
\right\}
$$

for every $F$-algebra $R$.

> [!warning] Dependence on the form
> The notation $U_n$ does not specify an arbitrary unitary group. Different Hermitian forms of dimension $n$ can give non-isomorphic $F$-groups. The notation $U_n$ below refers to the distinguished **quasi-split form** used by Getz–Hahn.

## Standard Matrix Model

Let $J_m$ denote the $m\times m$ antidiagonal matrix with all antidiagonal entries equal to $1$. Define

$$
J'_{2m}
=
\begin{pmatrix}
0 & J_m\\
-J_m & 0
\end{pmatrix},
\qquad
J'_{2m+1}
=
\begin{pmatrix}
0 & 0 & J_m\\
0 & 1 & 0\\
-J_m & 0 & 0
\end{pmatrix}.
$$

> [!info] Standard quasi-split unitary group
> For an $F$-algebra $R$, Getz–Hahn define
> $$
> U_n(R)
> =
> \left\{
> g\in\operatorname{GL}_n(M\otimes_F R):
> (J_n')^{-1}\sigma(g)^{-t}J_n'=g
> \right\}.
> $$
> Equivalently,
> $$
> \sigma(g)^tJ_n'g=J_n'.
> $$
> This is the standard quasi-split unitary group attached to $M/F$. [S11, Example 7.3, printed p. 193, PDF p. 206]

For odd $n$, $J_n'$ is Hermitian over $F$; for even $n$, it is skew-Hermitian. When $\operatorname{char}F\ne2$, multiplying a skew-Hermitian form by a suitable trace-zero scalar converts it to a Hermitian form with the same isometry group. In characteristic $2$, the matrix definition above should be retained without this shortcut.

## Why This Form Is Quasi-split

The matrix model is chosen so that it has a maximal isotropic flag defined over $F$. The stabilizer of such a complete isotropic flag is a Borel subgroup defined over $F$, which is precisely what quasi-splitness requires.

> [!note] Proof status
> S11 calls the general group in Example 7.3 quasi-split. Exercise 7.5 asks the reader to prove the two-variable instance and its local split/nonsplit behavior. Thus the general matrix model and its stated status are source-checked, while the full flag calculation given above is an independent proof roadmap rather than a proof reproduced from S11. [S11, Exercise 7.5, printed p. 212, PDF p. 225]

## Split, Quasi-split, and Anisotropic

| Condition | Meaning over $F$ | Typical behavior |
|---|---|---|
| split | contains a split maximal torus | simplest root datum and trivial Galois action on $\widehat G$ |
| quasi-split | contains an $F$-Borel subgroup | may still be nonsplit |
| non-quasi-split inner form | has no $F$-Borel subgroup | arises from a less isotropic Hermitian form |
| anisotropic derived group | has no proper $F$-parabolic subgroup | extreme non-split behavior |

The implications are

$$
\text{split}\Longrightarrow\text{quasi-split},
$$

but the reverse implication fails.

### The Real Rank-One Example

> [!example] $U(1,1)$ over $\mathbb R$
> Getz–Hahn exhibit a two-dimensional real unitary group whose upper-triangular subgroup is a Borel subgroup. It is therefore quasi-split over $\mathbb R$, but it is not split. [S11, immediately after Definition 1.9.2, printed p. 33, PDF p. 50]

### Behavior after Base Change

After base change from $F$ to $M$, the quadratic algebra splits and the unitary group becomes isomorphic to $\operatorname{GL}_n$. Locally, at a place where the quadratic extension splits, the corresponding unitary group is split; at a nonsplit place, the standard form remains quasi-split but can be nonsplit. S11 assigns the two-variable local verification to Exercise 7.5 rather than proving it in the text.

## The L-Group

The connected complex dual group of $U_n$ is

$$
\widehat{U_n}=\operatorname{GL}_n(\mathbb C).
$$

The full $L$-group retains the nontrivial Galois action:

> [!info] Formula (7.20)
> $$
> {}^LU_n\simeq\operatorname{GL}_n(\mathbb C)\rtimes\operatorname{Gal}_F,
> $$
> where the action factors through $\operatorname{Gal}(M/F)$. If $\sigma$ is its nontrivial element, then
> $$
> \sigma(g)=(J_n')^{-1}g^{-t}J_n'.
> $$
> [S11, Example 7.3, formula (7.20), printed p. 193, PDF p. 206]

This outer action is the essential difference between the $L$-group of a nonsplit unitary group and the direct product occurring for a split group.

Getz–Hahn also record an $L$-map

$$
{}^LU_n\longrightarrow{}^L\operatorname{Res}_{M/F}\operatorname{GL}_n,
$$

which is the dual-group datum underlying stable base change from unitary groups to general linear groups.

## Unramified Places

For a non-archimedean local field $F$, S11 defines a reductive group to be unramified when it is quasi-split and becomes split over a finite unramified extension. Consequently, if $M/F$ is unramified, the standard $U_n$ is an unramified reductive group and admits hyperspecial subgroups. This is the setting in which the unramified Satake correspondence applies. [S11, Definition 2.4.2, printed p. 59, PDF p. 76]

## Role in Local Langlands

For a local field $F$, tempered $L$-parameters for $U_n$ have the form

$$
\phi:W_F'\longrightarrow{}^LU_n,
$$

up to $\operatorname{GL}_n(\mathbb C)$-conjugacy. The nontrivial Galois action encodes the conjugate-self-dual symmetry that appears after base change to $\operatorname{GL}_n(M)$.

> [!warning] Conditional theorem in S11
> S11's Theorem 12.5.7 does **not** assert the full unitary-group LLC unconditionally. It assumes characteristic zero, Arthur's stated local claims, and stabilization of the twisted trace formula. Under those hypotheses it establishes the stated tempered packet assertions for quasi-split unitary groups. [S11, Theorem 12.5.7, printed p. 332, PDF p. 343]

## Endoscopy and Trace Formulae

Quasi-split unitary groups are central examples in endoscopic classification and trace-formula comparison. Their $L$-groups make the relevant functorial maps explicit, but the following layers must be kept distinct:

1. defining $U_n$ and ${}^LU_n$;
2. formulating local $L$-packets;
3. establishing endoscopic transfer and character identities;
4. stabilizing the relevant trace formula;
5. deriving global classification or functoriality results.

The first layer is explicit in S11. Later layers use major external inputs, including Mok's work and variants of the Fundamental Lemma.

## Key Properties

1. $U_n$ becomes $\operatorname{GL}_n$ over the quadratic splitting field $M$.
2. Its complex dual group is $\operatorname{GL}_n(\mathbb C)$.
3. Its full $L$-group has a generally nontrivial Galois action by inverse transpose.
4. Quasi-splitness supplies an $F$-Borel subgroup and Whittaker data.
5. At unramified nonsplit places, it still admits hyperspecial subgroups and Satake parameters.
6. Other unitary groups of dimension $n$ can be non-quasi-split inner forms of this distinguished group.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/L-Groups and Langlands Dual|L-Groups and Langlands Dual]]
- [[08 - Arithmetic Geometry/Concepts/Local Langlands Correspondence|Local Langlands Correspondence]]
- [[08 - Arithmetic Geometry/Concepts/Fundamental Lemma|Fundamental Lemma]]
- [[08 - Arithmetic Geometry/Concepts/Automorphic Representations|Automorphic Representations]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

**Status: partially verified.** The definition of quasi-splitness and the real quasi-split-but-nonsplit example were checked against [S11, Definition 1.9.2, printed p. 33, PDF p. 50]. The standard matrix model, dual group, Galois action, and $L$-map were checked against [S11, Example 7.3 and formula (7.20), printed p. 193, PDF p. 206]. The unramified-group definition was checked against [S11, Definition 2.4.2, printed p. 59, PDF p. 76]. The LLC status and its exact hypotheses were checked against [S11, Theorem 12.5.7, printed p. 332, PDF p. 343].

**Proof boundary.** S11 assigns the two-variable quasi-split/local behavior and the $L$-group computation to Exercises 7.5 and 7.7 [printed p. 212, PDF p. 225]; the general isotropic-flag explanation here is an independent proof roadmap. Endoscopic transfer, Mok's classification, and the Fundamental Lemma are external inputs rather than source-contained proofs. For that reason the note is `partially-verified`, not `verified`.
