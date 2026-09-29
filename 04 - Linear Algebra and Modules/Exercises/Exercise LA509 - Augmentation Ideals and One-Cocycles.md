---
title: "Exercise LA509: Augmentation Ideals and One-Cocycles"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 13, printed p. 829, PDF p. 844"
created: 2026-09-29
---

# Exercise LA509: Augmentation Ideals and One-Cocycles

## Problem Statement

> [!question] Lang XX.13
> Let $A\in\operatorname{Mod}(G)$ and $\alpha\in H^1(G,A)$. Let $\{a(x)\}_{x\in G}$ be a standard $1$-cocycle representing $\alpha$. Show that there exists a $G$-homomorphism $f:I_G\to A$ such that $f(x-1)=a(x)$, so $f\in(\operatorname{Hom}(I_G,A))^G$. Show that the sequence
> $$
> 0\longrightarrow A=\operatorname{Hom}(\mathbb Z,A)
> \longrightarrow\operatorname{Hom}(\mathbb Z[G],A)
> \longrightarrow\operatorname{Hom}(I_G,A)\longrightarrow0
> $$
> is exact, and that if $\delta$ is the coboundary for the cohomology sequence, then $\delta(f)=-\alpha$.

## Hints

> [!hint]- Hint 1: Use an abelian-group basis of the augmentation ideal
> The elements $x-1$, $x\ne1$, are a $\mathbb Z$-basis of $I_G$. Check equivariance using $y(x-1)=(yx-1)-(y-1)$.

> [!hint]- Hint 2: Choose a specific lift to the middle Hom module
> Define $F(x)=a(x)$ on the group-ring basis. Compute the cocycle $g\mapsto gF-F$ for the usual conjugation action on Hom.

## Solution

> [!success]- Independent construction and connecting-sign calculation
> All Hom groups in the short exact sequence are over $\mathbb Z$, with the action
> $$
> (g\cdot F)(v)=gF(g^{-1}v).
> $$
> For $\mathbb Z$ in the source, the action is trivial, so evaluation at $1$ identifies $\operatorname{Hom}_{\mathbb Z}(\mathbb Z,A)$ with $A$ as a $G$-module.
>
> Let $\varepsilon:\mathbb Z[G]\to\mathbb Z$ be augmentation and $I_G=\ker\varepsilon$. Each element of $I_G$ has a unique expression $\sum_{x\ne1}n_x(x-1)$ with finite support. Define the additive map
> $$
> f\left(\sum_{x\ne1}n_x(x-1)\right)=\sum_{x\ne1}n_x a(x).
> $$
> Since a cocycle satisfies $a(1)=0$, the identity $f(x-1)=a(x)$ holds also for $x=1$. For $x,y\in G$,
> $$
> f(y(x-1))=a(yx)-a(y)=y a(x)=y f(x-1).
> $$
> Thus $f$ is $G$-linear and is fixed in the Hom module.
>
> The augmentation sequence splits as abelian groups by $n\mapsto n\cdot1\in\mathbb Z[G]$. Therefore applying $\operatorname{Hom}_{\mathbb Z}(-,A)$ gives the stated short exact sequence: the first map is precomposition by $\varepsilon$, and the second is restriction to $I_G$. Explicitly, every additive map on $I_G$ extends by assigning any value to the additional basis vector $1$.
>
> Choose the lift $F:\mathbb Z[G]\to A$ given on each basis element $x$ by $F(x)=a(x)$, so $F(1)=0$ and $F|_{I_G}=f$. The standard connecting homomorphism sends $f$ to the class of $g\mapsto gF-F$, whose values lie in the kernel of restriction. At a basis element $x$,
> $$
> \begin{aligned}
> ((gF)-F)(x)
> &=g\,a(g^{-1}x)-a(x)\\
> &=-a(g),
> \end{aligned}
> $$
> where the cocycle identity $a(x)=a(g)+g a(g^{-1}x)$ gives the second equality. Therefore $gF-F$ is the map $v\mapsto-\varepsilon(v)a(g)$. Under the kernel identification with $A$, the connecting cocycle is $g\mapsto-a(g)$. Hence $\delta(f)=-\alpha$, with exactly the printed sign.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom functor]]
- [[06 - Representation Theory/Concepts/Group Algebra|Augmentation ideals]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 13, printed p. 829, PDF p. 844]. The minus sign was verified on the original page.
- Proof status: independent derivation, including the choice of lift that fixes the sign convention.
- The Hom sequence uses all abelian-group homomorphisms, not only equivariant ones. Taking $G$-invariants later need not preserve surjectivity.
- No finiteness hypothesis on $G$ is used.

