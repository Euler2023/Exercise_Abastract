---
title: 'Exercise LA560: Completing a Modulation in the Norm Topology'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 14, printed p. 308, PDF p. 327
source_refs:
- S4/ch-IV/sec-6/ex-14
created: '2026-10-23'
---

# Exercise LA560: Completing a Modulation in the Norm Topology

## Problem Statement

> [!question] Neukirch IV.6.14
> If $A$ is a $G$-modulation, then the completion $\widehat A$ is again a $G$-modulation which, for connected $X$, is given by
> $$
> \widehat A(X)=\varprojlim_f A(X)/f_*A(Y),
> $$
> where the projective limit is taken over all Galois maps $f:Y\to X$.

## Hints

> [!hint]- Hint 1
> Use the norm images as a neighborhood basis of zero in $A(X)$. Common Galois refinements make this family directed.

> [!hint]- Hint 2
> The proof of Exercise 13 actually establishes continuity of both operations: every target norm neighborhood contains the image of some source norm neighborhood. Extend using prodiscrete completion.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> For connected $X$, write $N_f=f_*A(Y)$. Given two subgroups arising from $f_1,f_2$, choose a common Galois refinement $q$. Then $N_q\subset N_{f_1}\cap N_{f_2}$. These subgroups and their translates therefore define a group topology. The kernel of separation is $\bigcap_fN_f=NA(X)$.
>
> Give $Q_f=A(X)/N_f$ the discrete topology. The inverse limit $\widehat A(X)$ is a complete Hausdorff prodiscrete group: it is a closed subgroup of a product of discrete groups, and compatible coordinates converge when they are eventually constant in each coordinate. The natural map $A(X)\to\widehat A(X)$ has dense image. For any finite set of coordinates, choose a common successor $q$; any representative in $Q_q$ of its compatible coordinate realizes all these finitely many coordinates simultaneously. The kernel is $NA(X)$. Thus this is the separated completion for the norm topology, without assuming finite quotients.
>
> The refinements in Exercise 13 prove continuity of the maps. For $h:X\to Z$, given any $N_q$ on $Z$, choose a Galois cover $p$ over $X$ such that $hp$ factors through $q$. Then $h_*N_p\subset N_q$. Given any $N_p$ on $X$, choose a Galois cover $q$ over $Z$ such that every pullback component factors through $p$. The Mackey square gives $h^*N_q\subset N_p$. Thus both $h_*,h^*$ are continuous homomorphisms.
>
> Extend coordinate by coordinate. For example, for the target coordinate $A(Z)/N_q$ of $h_*$, choose such a $p$, giving $A(X)/N_p\to A(Z)/N_q$. For $\widehat A(X)$, first take the $p$ coordinate and then apply this map. Passing to a smaller $N_p$ gives the same value, so this is independent of choices. The target coordinates are compatible and give $\widehat h_*$; the same construction gives $\widehat h^*$. The extensions are unique because the original groups are dense and the targets are Hausdorff.
>
> For disconnected objects, take the completion of the finite direct sum, equivalently the finite product. The composition laws, identity laws, and every Mackey square of the original modulation are equalities between continuous maps. They hold on the dense subgroup $A(X)$, hence also on the completion. Finite sums and additivity are preserved as well. Therefore $\widehat A$ is a $G$-modulation and the natural map $A\to\widehat A$ is a homomorphism of modulations.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Inverse Limits of Abelian Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Galois Refinements]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 14, printed p. 308, PDF p. 327]. Independent derivation of continuity and prodiscrete completion.
- **Boundary:** For a general modulation, norm quotients may be infinite, so this completion need not be compact or profinite. Finiteness of norm quotients requires the later class-field hypotheses.
