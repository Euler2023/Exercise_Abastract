---
title: "Exercise R305: Commutative Semisimple Rings Are Products of Fields"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - semisimplicity
  - product-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 6, printed p. 661, PDF p. 676"
created: 2026-09-29
---

# Exercise R305: Commutative Semisimple Rings Are Products of Fields

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 6
> Let $R$ be a semisimple commutative ring. Show that $R$ is a direct product of fields.

## Hints

> [!hint]- Hint 1: Decompose the regular module
> Write $R$ as a direct sum of simple ideals. The expression of $1$ in this direct sum has finite support, and those finitely many summands already contain every element $r=r1$.

> [!hint]- Hint 2: The components of the identity supply identities for the factors
> If $1=e_1+\cdots+e_t$ with $e_i\in I_i$, then $I_iI_j=0$ for $i\ne j$. Show that $e_i$ acts as the identity on $I_i$, and that every nonzero element of $I_i$ has an inverse within $I_i$.

## Solution

> [!success]- Independent derivation from simple ideals and idempotents
> By the definition of a semisimple ring, $R\ne0$ and its regular left module has a decomposition
>
> $$
> R=\bigoplus_{i\in I}I_i
> $$
>
> into simple nonzero left ideals. Since $R$ is commutative, these are two-sided ideals.
>
> An element of a direct sum has finite support, so write $1=e_1+\cdots+e_t$ with $e_i\in I_i$ for finitely many distinct indices, after relabeling. For any $r\in R$,
>
> $$
> r=r1=\sum_{i=1}^t re_i\in I_1+\cdots+I_t.
> $$
>
> Thus these summands already equal $R$, and there are no other nonzero summands. We have $t\ge1$ and $R=I_1\oplus\cdots\oplus I_t$.
>
> If $i\ne j$, a product $xy$ with $x\in I_i$, $y\in I_j$ belongs to both ideals, hence belongs to $I_i\cap I_j=0$. Therefore $I_iI_j=0$. For $x\in I_i$ this gives
>
> $$
> x=x1=\sum_{j=1}^t xe_j=xe_i.
> $$
>
> Commutativity also gives $e_ix=x$. Thus $e_i$ is the identity of the ring $I_i$ with its inherited operations. In particular $e_i^2=e_i$, and $e_i\ne0$ because $I_i\ne0$.
>
> Let $0\ne a\in I_i$. The principal ideal $Ra$ is a nonzero submodule of the simple module $I_i$, so $Ra=I_i$. There exists $r\in R$ with $ra=e_i$. The element $b=re_i$ belongs to $I_i$, and
>
> $$
> ba=(re_i)a=r(e_ia)=ra=e_i.
> $$
>
> Since $I_i$ is commutative, $ab=e_i$ as well. Every nonzero element of the nonzero commutative ring $I_i$ is invertible, so $I_i$ is a field.
>
> Finally, define
>
> $$
> \Phi:R\longrightarrow\prod_{i=1}^t I_i,
> \qquad r\longmapsto(re_1,\ldots,re_t).
> $$
>
> The identities $e_i^2=e_i$ show that $\Phi$ is multiplicative, and $\Phi(1)=(e_1,\ldots,e_t)$ is the identity in the product. Its inverse is $(x_1,\ldots,x_t)\mapsto\sum_i x_i$: products between different ideals vanish, and $x_ie_i=x_i$. Thus $R$ is isomorphic as a ring to a finite nonempty direct product of fields.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source and proof status:** The full statement was checked at [S2, Ch. XVII, Ex. 6, printed p. 661, PDF p. 676]. The definition of a semisimple ring, including $1\ne0$, was checked at [S2, Ch. XVII, §4, printed p. 651, PDF p. 666]. The field factors and the product isomorphism are independently constructed; no classification of simple rings is imported.
- **Boundary:** The product is finite, as follows from the finite support of the identity. Each factor has its own identity $e_i$, usually different from $1_R$. Commutativity is what makes the simple ideals into fields instead of more general noncommutative factors.
