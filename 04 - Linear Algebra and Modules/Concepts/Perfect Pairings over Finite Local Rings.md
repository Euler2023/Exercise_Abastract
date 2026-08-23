---
title: Perfect Pairings over Finite Local Rings
aliases:
  - Unimodular Bilinear Pairings
topic: linear-algebra
tags:
  - concept
  - linear-algebra
  - module-theory
  - bilinear-forms
created: 2026-08-12
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, §5, printed p. 523, PDF p. 538"
source_status: partially-verified
status: not-started
---

# Perfect Pairings over Finite Local Rings

## Definition

> [!info] Perfect bilinear pairing
> Let $R$ be a commutative ring and let $A$ be a finite free $R$-module. An $R$-bilinear pairing
>
> $$
> B:A\times A\longrightarrow R
> $$
>
> is **perfect** if the adjoint map
>
> $$
> A\longrightarrow A^*=\operatorname{Hom}_R(A,R),
> \qquad
> x\longmapsto B(x,\cdot),
> $$
>
> is an isomorphism. If $B(x,y)=B(y,x)$ for all $x,y$, the pairing is symmetric.

## Intuition

Perfectness means that the pairing detects every nonzero direction and realizes every linear functional. Over a field this is ordinary nondegeneracy. Over a ring such as $R=\mathbb{Z}/p^N\mathbb{Z}$, it is the integral analogue: the Gram matrix must be invertible over $R$, not merely nonzero.

## Matrix Criterion

Choose a basis of $A$ and let $M$ be the Gram matrix of $B$. Then the adjoint map is represented by $M$, so the following are equivalent:

1. $B$ is perfect.
2. $M\in\operatorname{GL}_n(R)$.
3. $\det M$ is a unit of $R$.

For $R=\mathbb{Z}/p^N\mathbb{Z}$, this means $p\nmid\det M$.

## Reduction Modulo the Maximal Ideal

> [!abstract] Nondegeneracy after reduction
> Let $R=\mathbb{Z}/p^N\mathbb{Z}$ and let $B$ be perfect on a finite free $R$-module $A$. Reducing the Gram matrix modulo $p$ gives an invertible matrix over $\mathbb{F}_p$. Hence the induced pairing on
>
> $$
> A/pA
> $$
>
> is nondegenerate.

This reduction is the bridge between module calculations over $R$ and linear algebra over the residue field $\mathbb{F}_p$.

## Symmetric Pairings and Quadratic Functions

When $B$ is symmetric, define

$$
q(x)=B(x,x).
$$

If $2$ is a unit in $R$, then

$$
q(x+y)-q(x)-q(y)=2B(x,y),
$$

and the derivative of $q$ at $x$ in the direction $y$ is $2B(x,y)$. Thus, over $\mathbb{Z}/p^N\mathbb{Z}$ with $p$ odd, a primitive vector cannot have identically zero derivative modulo $p$: perfectness supplies some $y$ for which $B(x,y)$ is a unit modulo $p$.

## Example

> [!example] The standard pairing
> On $A=(\mathbb{Z}/p^N\mathbb{Z})^n$, the dot product
>
> $$
> B(x,y)=x_1y_1+\cdots+x_ny_n
> $$
>
> is perfect because its Gram matrix is the identity. More generally, $B(x,y)=x^{\mathsf T}My$ is perfect exactly when $\det M$ is a unit modulo $p^N$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Lang defines the adjoint homomorphism $E\to\operatorname{Hom}_R(F,R)$ attached to a bilinear form and calls the form nonsingular on the left when this map is an isomorphism; he also warns that nondegeneracy need not imply nonsingularity over a ring.
- The terminology “perfect,” the finite-free matrix criterion, and the determinant-unit equivalence are independently derived here from that adjoint map.
- The reduction and derivative observations are independently derived here for use in Exercise LA10.
- No classification of bilinear forms over arbitrary local rings is asserted.
