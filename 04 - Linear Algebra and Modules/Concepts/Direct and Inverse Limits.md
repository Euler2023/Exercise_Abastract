---
title: Direct and Inverse Limits
aliases:
  - Direct Limits
  - Inverse Limits
  - Colimits and Projective Limits
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - direct-limit
  - inverse-limit
created: 2026-08-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, §10, printed pp. 159-164, PDF pp. 174-179; Exercises 16-26, printed pp. 169-171, PDF pp. 184-186"
source_status: partially-verified
status: not-started
---

# Direct and Inverse Limits

## Directed Systems

A partially ordered set $I$ is **directed** if for every $i,j\in I$ there is $k\in I$ with $i\le k$ and $j\le k$.

A **direct system** of $A$-modules consists of modules $M_i$ and maps

$$
f_{ij}:M_i\longrightarrow M_j
\qquad (i\le j)
$$

such that $f_{ii}=\operatorname{id}$ and $f_{jk}f_{ij}=f_{ik}$.

An **inverse system** reverses the arrows:

$$
u_{ji}:M_j\longrightarrow M_i
\qquad (i\le j),
$$

with $u_{ii}=\operatorname{id}$ and $u_{ji}u_{kj}=u_{ki}$.

## Direct Limit

> [!info] Universal property
> A direct limit is a module $M$ with compatible maps $\iota_i:M_i\to M$ such that every compatible family $g_i:M_i\to N$ factors uniquely through one map $M\to N$.

It is denoted

$$
M=\varinjlim_i M_i.
$$

For modules it can be constructed as

$$
\varinjlim_i M_i
=
\left(\bigoplus_i M_i\right)
\big/
\left\langle x-f_{ij}(x):x\in M_i,\ i\le j\right\rangle,
$$

where the two terms in each relation are placed in their respective direct-sum components.

An element represented by $x\in M_i$ becomes zero in the direct limit exactly when its image is zero at some later stage.

## Inverse Limit

> [!info] Universal property
> An inverse limit is a module $M$ with compatible projections $\pi_i:M\to M_i$ such that every compatible family of maps $N\to M_i$ factors uniquely through one map $N\to M$.

It is denoted

$$
M=\varprojlim_i M_i.
$$

For modules, groups, or rings it is the compatible subobject of the direct product:

$$
\varprojlim_i M_i
=
\left\{(x_i)\in\prod_iM_i:
u_{ji}(x_j)=x_i\text{ whenever }i\le j\right\}.
$$

## Exactness

> [!abstract] Filtered direct limits are exact
> A levelwise short exact sequence of directed systems
>
> $$
> 0\longrightarrow(M_i')\longrightarrow(M_i)\longrightarrow(M_i'')\longrightarrow0
> $$
>
> induces a short exact sequence
>
> $$
> 0\longrightarrow\varinjlim M_i'
> \longrightarrow\varinjlim M_i
> \longrightarrow\varinjlim M_i''\longrightarrow0.
> $$

The proof reduces injectivity and middle exactness to the finite-stage vanishing criterion above; surjectivity is obtained by lifting one representative at one stage.

For a levelwise short exact sequence

$$
0\longrightarrow(M_i')\longrightarrow(M_i)\longrightarrow(M_i'')\longrightarrow0,
$$

the induced inverse-limit sequence is always left exact, but surjectivity onto $\varprojlim M_i''$ can fail. Lang's exactness criterion assumes that the left-hand, or kernel, system $(M_i')$ satisfies the **Mittag-Leffler condition**: its images in each fixed stage eventually stabilize. Surjective transition maps in $(M_i')$ are a sufficient condition.

## Interaction with Hom

For every module $N$, the universal property gives

$$
\operatorname{Hom}_A\left(N,\varprojlim_i M_i\right)
\cong
\varprojlim_i\operatorname{Hom}_A(N,M_i).
$$

For a directed system, the comparison map

$$
\varinjlim_i\operatorname{Hom}_A(E,M_i)
\longrightarrow
\operatorname{Hom}_A\left(E,\varinjlim_iM_i\right)
$$

is injective when $E$ is finitely generated and is an isomorphism when $E$ is finitely presented. Without these finiteness hypotheses the direct-limit assertion need not hold.

## Examples

> [!example] The $p$-adic integers
>
> $$
> \mathbb Z_p=\varprojlim_n\mathbb Z/p^n\mathbb Z
> $$
>
> with the canonical reduction maps.

> [!example] Power series
>
> $$
> k\llbracket T\rrbracket=\varprojlim_n k[T]/(T^n).
> $$

> [!example] A module from finite pieces
> Every module is the direct limit of its finitely generated submodules ordered by inclusion. It is also a direct limit of finitely presented modules, although those need not embed as submodules.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions, universal constructions, Mittag-Leffler boundary, and examples were checked against Lang §10. The exactness and Hom comparison statements occur as Chapter III exercises; the explanations here are independent derivations or proof summaries, with complete arguments supplied in the linked exercise notes.
