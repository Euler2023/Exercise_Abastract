---
title: "Exercise Rep137: Irreducible Representations of p-Groups in Characteristic p"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - modular-representations
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 13, printed p. 725, PDF p. 740"
created: 2026-09-29
---

# Exercise Rep137: Irreducible Representations of p-Groups in Characteristic p

## Problem Statement

> [!question] Lang XVIII.13
> Let $G$ be a $p$-group and let $G\to\operatorname{Aut}(V)$ be a representation on a finite dimensional vector space over a field of characteristic $p$. Assume that the representation is irreducible. Show that the representation is trivial, i.e. $G$ acts as the identity on $V$.

> [!info] Scope
> In the finite-group setting of this chapter, $|G|$ is a power of $p$. The characteristic-$p$ hypothesis deliberately replaces the chapter's usual assumption that the characteristic does not divide $|G|$. An irreducible representation is nonzero.

## Hints

> [!hint]- Hint 1: Use the center
> A nontrivial finite $p$-group has a central element $z$ of order $p$. In characteristic $p$, what is $(\rho(z)-I)^p$?

> [!hint]- Hint 2: Pass to a smaller group
> The nonzero kernel of $\rho(z)-I$ is $G$-stable because $z$ is central. Irreducibility then forces $z$ to act trivially, so the action descends to $G/\langle z\rangle$.

## Solution

> [!success]- Independent derivation by induction on the group order
> We prove the assertion by induction on $|G|$. It is immediate for the trivial group. Suppose $G\ne1$. The class equation shows that $|Z(G)|$ is divisible by $p$: each noncentral conjugacy class has size a positive power of $p$, and so $|Z(G)|\equiv|G|\equiv0\pmod p$. Thus the center is nontrivial. An element of the center has order $p^a$ for some $a\ge1$, and its $p^{a-1}$-st power gives a central element $z$ of order $p$.
>
> Since the identity commutes with $\rho(z)$, the binomial theorem in characteristic $p$ gives
> $$
> (\rho(z)-I)^p=\rho(z)^p-I=0.
> $$
> A nilpotent endomorphism of a nonzero finite-dimensional space has a nonzero kernel: if it were injective, every positive power would be injective, whereas the zero map is not. Hence $W=\ker(\rho(z)-I)$ is nonzero. For $g\in G$ and $w\in W$, centrality gives
> $$
> (\rho(z)-I)\rho(g)w=\rho(g)(\rho(z)-I)w=0.
> $$
> Thus $W$ is $G$-stable. Irreducibility yields $W=V$, so $\rho(z)=I$.
>
> The representation therefore factors through $G/\langle z\rangle$. A subspace is invariant under this quotient action exactly when it was invariant under $G$, so the quotient representation is still irreducible. The quotient is a strictly smaller finite $p$-group. By induction its action, and therefore the original action, is trivial.
>
> Finally a nonzero vector spans an invariant line in a trivial representation. Irreducibility consequently implies $\dim V=1$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[06 - Representation Theory/Exercises/Exercise Rep123 - A Common Fixed Vector for a Unipotent Group|Kolchin's common-fixed-vector argument]]

## Notes

- **Source and proof status:** The statement was visually checked at [S2, Ch. XVIII, Exercise 13, printed p. 725, PDF p. 740]. The induction and the characteristic-$p$ calculation are independent derivations; no semisimplicity theorem in characteristic $p$ is used.
- **Infinite torsion $p$-groups:** If “$p$-group” instead permits an infinite group all of whose elements have $p$-power order, the same conclusion follows from the common-fixed-vector theorem proved in the linked Lang XVII.8 note. Each operator is unipotent because $(\rho(g)-I)^{p^a}=0$ when $g^{p^a}=1$. That theorem supplies a nonzero fixed vector, whose invariant line must be all of $V$.
- **Boundary:** The field need not be algebraically closed. For a reducible representation, individual operators can be nonidentity unipotent matrices, so the conclusion uses irreducibility essentially.
