---
title: "Exercise LA618: Invertible Lattice Maps and Isogenies of Complex Tori"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.6, Exercise 6.6.3, printed p. 251, PDF p. 265"
source_refs:
  - "S7/ch-6/sec-6/ex-3"
created: 2026-10-28
---

# Exercise LA618: Invertible Lattice Maps and Isogenies of Complex Tori

## Problem Statement

> [!question] Original Exercise 6.6.3
> (a) Show that a map $\varphi(z+\Lambda_g)=Mz+\Lambda_h$, where $M\in\mathrm M_{h,g}(\mathbb C)$ and $M\Lambda_g\subseteq\Lambda_h$, is an isogeny when $h=g$ and $M$ is invertible.
>
> (b) Show that isogeny is an equivalence relation.

## Hints

> [!hint]- Hint 1
> Identify the kernel with $M^{-1}\Lambda_h/\Lambda_g$.

> [!hint]- Hint 2
> A finite quotient of full lattices is killed by a positive integer; use that integer to construct the reverse map.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** The lattice containment makes the map well-defined, holomorphic and additive. Invertibility gives surjectivity, because $w+\Lambda_h$ is the image of $M^{-1}w+\Lambda_g$. The group $M^{-1}\Lambda_h$ is a full lattice containing $\Lambda_g$. Expressing a basis of $\Lambda_g$ in a basis of this larger lattice gives a nonsingular integer matrix, so the index is the absolute value of its nonzero determinant and is finite. This index is the order of $\ker\varphi=M^{-1}\Lambda_h/\Lambda_g$.
>
> **(b).** Identity maps are isogenies. A composite of surjective holomorphic homomorphisms is surjective; for two isogenies its kernel maps onto the kernel of the second with kernel equal to the first kernel, hence is finite. This proves transitivity. For symmetry, every holomorphic homomorphism of complex tori lifts at the origin to a complex-linear map $M$ carrying lattices into lattices. If it is surjective with finite kernel then its derivative is both surjective and injective: a nontrivial complex kernel would give a positive-dimensional kernel near zero, while a proper image would prevent surjectivity. Thus the dimensions agree and $M$ is invertible. Since $M^{-1}\Lambda_h/\Lambda_g$ is finite, some integer $m>0$ kills it, giving $mM^{-1}\Lambda_h\subseteq\Lambda_g$. The matrix $mM^{-1}$ induces a reverse isogeny by (a), and both composites are multiplication by $m$. The zero-dimensional torus causes no exception. Thus the relation 'there exists an isogeny' is reflexive, symmetric and transitive.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Imported input:** Holomorphic homomorphisms of complex tori lift to complex-linear maps on their universal covers; this is the lifting description developed in Section 6.1.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
