---
title: "Exercise G316: Equivalent Criteria for Double Transitivity"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - double-transitivity
  - primitive-actions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 47, printed p. 80, PDF p. 95"
created: 2026-08-28
---

# Exercise G316: Equivalent Criteria for Double Transitivity

## Problem Statement

> [!question] Exercise 47
> Let a finite group $G$ act transitively and faithfully on a set $S$ with at least two elements, and let $H=G_s$.
>
> (a) Prove that $G$ is doubly transitive if and only if $H$ is transitive on $S\setminus\{s\}$.
>
> (b) Prove that $G$ is doubly transitive if and only if $G=HTH$, where $T$ is a subgroup of order $2$ not contained in $H$.
>
> (c) If $G$ is doubly transitive and $[G:H]=n$, prove $|G|=d(n-1)n$, where $d$ is the order of a two-point stabilizer. Prove also that $H$ is maximal, so the action is primitive.

## Hints

> [!hint]- Hint 1
> $H$-orbits on $G/H$ correspond to double cosets $H\backslash G/H$.

## Solution

> [!success]- Solution
> **(a)** After sending the first entry of an ordered pair to $s$, the remaining freedom is precisely the action of $H$ on the second entry. Thus transitivity on ordered pairs of distinct points is equivalent to transitivity of $H$ on $S\setminus\{s\}$.
>
> A doubly transitive action is primitive: if a block contains $s$ and some $t\ne s$, then transitivity of $H$ on the complement of $s$ forces that block to contain every point. Consequently every nontrivial normal subgroup of $G$ is transitive, because its orbits form a stable partition; faithfulness rules out singleton orbits for a nontrivial subgroup.
>
> **(b)** Assume double transitivity. The orbit of an ordered pair of distinct points has even size $n(n-1)$, so $|G|$ is even and Cauchy's theorem gives an involution. Some conjugate $t$ of an involution lies outside $H$: otherwise its nontrivial normal closure would lie in $H$, contradicting the preceding fact that every nontrivial normal subgroup is transitive. Put $T=\langle t\rangle$. By (a), $H$ has exactly two orbits on $G/H$, so there are exactly two double cosets, $H$ and $HtH$. Therefore
>
> $$
> G=H\cup HtH=HTH.
> $$
>
> Conversely, if $G=HTH$ with $T=\{1,t\}\nsubseteq H$, then $H$ and $HtH$ are the two double cosets. Hence $H$ has exactly the two orbits $\{H\}$ and $(G/H)\setminus\{H\}$, so (a) gives double transitivity.
>
> **(c)** The stabilizer $H$ is transitive on the other $n-1$ points, and a stabilizer in $H$ of one of those points has order $d$. Thus $|H|=d(n-1)$ and
>
> $$
> |G|=[G:H]|H|=nd(n-1).
> $$
>
> The block argument above shows the action is primitive; Exercise 46 then implies that $H$ is maximal.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G315 - Primitive Actions and Maximal Stabilizers|Exercise G315]]

## Notes

- **Imported result:** Cauchy's theorem is used to obtain an involution after the order is shown even.
- **Source status:** [S2, Ch. I, Ex. 47, printed p. 80, PDF p. 95]. The orbit, double-coset, and normal-closure arguments are independent.

