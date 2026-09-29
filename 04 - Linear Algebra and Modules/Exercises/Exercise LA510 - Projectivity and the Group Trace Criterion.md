---
title: "Exercise LA510: Projectivity and the Group Trace Criterion"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 14, printed p. 829, PDF p. 844"
created: 2026-09-29
---

# Exercise LA510: Projectivity and the Group Trace Criterion

## Problem Statement

> [!question] Lang XX.14 — Finite groups
> We now turn to the case of finite groups $G$. For such groups and a $G$-module $A$ we have the trace
> $$
> T_G:A\to A,\qquad T_G(a)=\sum_{\sigma\in G}\sigma a.
> $$
> We define a module $A$ to be $G$-regular if there exists a $\mathbb Z$-endomorphism $u:A\to A$ such that $\mathrm{id}_A=T_G(u)$. Recall that the operation of $G$ on $\operatorname{End}(A)$ is given by
> $$
> [\sigma]f(a)=\sigma f(\sigma^{-1}a)\quad\text{for }\sigma\in G.
> $$
>
> (a) Show that a projective object in $\operatorname{Mod}(G)$ is $G$-regular.
>
> (b) Let $R$ be a commutative ring and let $A$ be in $\operatorname{Mod}_R(G)$ (the category of $(G,R)$-modules). Show that $A$ is $R[G]$-projective if and only if $A$ is $R$-projective and $R[G]$-regular, meaning that $\mathrm{id}_A=T_G(u)$ for some $R$-homomorphism $u:A\to A$.

## Hints

> [!hint]- Hint 1: Extract the coefficient at the group identity
> On a free $R[G]$-module, project onto the $R$-span of the chosen module basis. The sum of its conjugates is the identity.

> [!hint]- Hint 2: Average a lift after composing with the trace witness
> If $v:B\to C$ is surjective and $f:A\to C$ is equivariant, lift $f$ $R$-linearly to $\ell:A\to B$. Average $\ell u$ to get an equivariant lift.

## Solution

> [!success]- Independent proof of the trace criterion
> We prove (b); taking $R=\mathbb Z$ then proves (a).
>
> **Necessity.** A projective $R[G]$-module $A$ is a direct summand of a free module
> $$
> P=\bigoplus_{j\in J}R[G]e_j.
> $$
> Since $R[G]$ is free over $R$ with basis $G$, $P$ is $R$-free and $A$ is $R$-projective.
>
> Define the $R$-linear map $u_P:P\to P$ by keeping only the coefficients of $1e_j$:
> $$
> u_P\left(\sum_{g,j}r_{g,j}g e_j\right)=\sum_j r_{1,j}e_j.
> $$
> For a basis vector $h e_j$, the term $g\,u_P(g^{-1}h e_j)$ is zero unless $g=h$, when it equals $h e_j$. Hence
> $$
> \sum_{g\in G}g u_P g^{-1}=\mathrm{id}_P.
> $$
> Choose equivariant maps $i:A\to P$ and $r:P\to A$ with $ri=\mathrm{id}_A$. Then $u_A=r u_P i$ is $R$-linear and
> $$
> T_G(u_A)=r T_G(u_P)i=ri=\mathrm{id}_A.
> $$
> This proves regularity.
>
> **Sufficiency.** Suppose that $A$ is $R$-projective and $\sum_g g u g^{-1}=\mathrm{id}_A$ for an $R$-linear $u$. Given a surjective $R[G]$-map $v:B\to C$ and an $R[G]$-map $f:A\to C$, choose an $R$-linear lift $\ell:A\to B$ with $v\ell=f$. Define
> $$
> L(a)=\sum_{g\in G}g\,\ell\bigl(u(g^{-1}a)\bigr).
> $$
> It is $R$-linear. For $h\in G$, changing variable $g=ht$ gives $L(ha)=hL(a)$, so it is $G$-linear. Moreover,
> $$
> vL(a)=\sum_g g f(u(g^{-1}a))
> =f\left(\sum_g g u(g^{-1}a)\right)=f(a).
> $$
> Thus every equivariant map out of $A$ lifts through every equivariant surjection, which is the defining projectivity property.
>
> The same argument with $R=\mathbb Z$ proves that each projective $G$-module is $G$-regular.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group rings]]

## Notes

- Source checked at [S2, Ch. XX, finite-group preamble and Exercise 14, printed p. 829, PDF p. 844]. The shared preamble defining trace and regularity is included.
- Proof status: independent derivation. The standard characterization of projectives as direct summands of free modules is the named module-theoretic input.
- No inverse to $|G|$ in $R$ is assumed. The witness $u$ replaces division by the group order in this averaging argument.
- “$G$-regular” here is Lang's trace-splitting condition; it does not mean that the module is the regular representation or that it is necessarily projective over the group ring.

