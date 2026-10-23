---
title: 'Exercise LA559: Universal Norms Form a Submodulation'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 13, printed p. 308, PDF p. 327
source_refs:
- S4/ch-IV/sec-6/ex-13
created: '2026-10-23'
---

# Exercise LA559: Universal Norms Form a Submodulation

## Problem Statement

> [!question] Neukirch IV.6.13
> Let $A$ be a $G$-modulation. For every connected finite $G$-set $X$, let
> $$
> NA(X)=\bigcap_f f_*A(Y),
> $$
> where the intersection is taken over all Galois maps $f:Y\to X$. Show that the function $NA(X)$ defines a $G$-submodulation $NA$ of $A$, the modulation of universal norms.

## Hints

> [!hint]- Hint 1
> Every finite cover is dominated by a connected Galois cover: take the finite-index normal core of its open subgroup.

> [!hint]- Hint 2
> For pushforward, use a common Galois refinement. For pullback, use a Mackey square, choosing the downstairs cover so that each upstairs component dominates the given cover.

## Solution

> [!success]- Independent derivation
> For disconnected $X=\coprod X_i$, use the convention $NA(X)=\bigoplus_i NA(X_i)$. It suffices to show that $h_*$ and $h^*$ preserve these groups for connected maps $h:X\to Z$. Write the stabilizers as $H=G_x\subset K=G_{h(x)}$.
>
> First record the refinement fact for finite covers. If $W\to X$ is Galois, its stabilizer satisfies $N\triangleleft H$ and $N$ is open in $K$. Set
> $$
> M=\bigcap_{k\in K}kNk^{-1}\triangleleft K.
> $$
> The intersection has only finitely many distinct factors, so $M$ is open and $M\subset N$. The cover $Y=G/M\to Z=G/K$ is Galois. Every component of its pullback to $X$ has stabilizer some $H\cap kMk^{-1}=M$, so each component maps to $X$ through $G/N=W$. For two arbitrary covers, the normal core of the two stabilizers likewise gives a common Galois refinement.
>
> **Pushforward.** Let $a\in NA(X)$ and choose any Galois cover $q:Y\to Z$. Choose a connected Galois cover $p:W\to X$ and maps $r:W\to Y$ such that $hp=qr$, using a common normal core of the stabilizers. Since $a\in p_*A(W)$, write $a=p_*b$. Then
> $$
> h_*a=h_*p_*b=q_*r_*b\in q_*A(Y).
> $$
> This holds for every $q$, so $h_*a\in NA(Z)$.
>
> **Pullback.** Let $a\in NA(Z)$ and choose any Galois cover $p:W\to X$. Using the core construction above, choose a Galois cover $q:Y\to Z$ such that every $T_j\to X$ in $X\times_ZY=\coprod_jT_j$ factors through $W$. Write $a=q_*b$. The Mackey square gives
> $$
> h^*a=h^*q_*b=\sum_j (T_j\to X)_*(T_j\to Y)^*b.
> $$
> By transitivity of pushforward, every summand lies in $p_*A(W)$, and therefore so does their sum. Varying $p$ gives $h^*a\in NA(X)$.
>
> For isomorphisms, the two operations are inverse, so conjugation also preserves $NA$. All functorial laws, additivity, and Mackey squares are restrictions to these subgroups of the corresponding identities in $A$. The subgroups therefore form a submodulation. The proof requires neither Galois descent nor surjectivity of any norm map.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Subobjects and Functors]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Cores]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 13, printed p. 308, PDF p. 327]. Independent proof using normal-core refinements and Mackey squares.
- **Boundary:** The universal norm group is the intersection of all finite Galois norm images. Membership in every such image must not be confused with the existence of a common preimage at an infinite level.
