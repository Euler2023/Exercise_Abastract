---
title: "Exercise Rep146: Coprime Adams Operations Preserve Irreducibility"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - adams-operations
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 24, printed p. 727, PDF p. 742"
created: 2026-09-29
---

# Exercise Rep146: Coprime Adams Operations Preserve Irreducibility

## Problem Statement

> [!question] Lang XVIII.24 — Printed statement
> Let $\chi$ be a simple character of $G$. Prove that $\Psi^n(\chi)$ is also simple. (The characters are over $\mathbb C$.)

> [!warning] Source issue: a missing condition on the power
> Here $G$ is finite, $n\ge1$, and $\Psi^n\chi(g)=\chi(g^n)$ as in Exercise 23. The printed assertion is false without an additional hypothesis. A sufficient corrected hypothesis is
> $$
> \gcd(n,\exp G)=1,
> $$
> where $\exp G$ is the least common multiple of all element orders. Without this hypothesis $\Psi^n\chi$ remains an integral virtual character, but can fail even to be effective. The solution gives a counterexample and proves the corrected assertion.

## Hints

> [!hint]- Hint 1: Test a noncoprime power
> Use the two-dimensional standard character of $S_3$ and square every group element. Its values on the identity, transpositions, and three-cycles are $2,0,-1$.

> [!hint]- Hint 2: Preserve the norm when powers are coprime
> Under the corrected hypothesis, the map $g\mapsto g^n$ is a permutation of the set $G$. Combine the integral Newton recursion from Exercise 23 with the virtual-character criterion in Exercise 22.

## Solution

> [!success]- Independent counterexample and proof under the corrected hypothesis
> **1. The printed claim fails.** Let $\chi$ be the character of the standard two-dimensional representation of $S_3$, obtained by removing the constant line from the permutation representation on three letters. Counting fixed letters and subtracting $1$ gives its values $2,0,-1$ on the identity, transpositions, and three-cycles. The corresponding class sizes are $1,3,2$, so its squared norm is $(4+0+2)/6=1$, confirming irreducibility.
>
> Squaring sends every transposition to the identity and every three-cycle to a three-cycle. Thus $\Psi^2\chi$ has values $2,2,-1$. If $\varepsilon$ denotes the sign character, direct comparison on these three classes gives
> $$
> \Psi^2\chi=1-\varepsilon+\chi.
> $$
> The coefficient of $\varepsilon$ is negative, so this is not effective. Its squared norm is $1^2+(-1)^2+1^2=3$, and it is certainly not simple. As an even simpler failure of simplicity, $\Psi^6\chi=2\cdot1$.
>
> **2. Every Adams power is an integral virtual character.** For completeness, the Newton identity for $\lambda^j\chi=\bigwedge^j\chi$ is
> $$
> n\lambda^n\chi=\sum_{r=1}^n(-1)^{r-1}(\Psi^r\chi)(\lambda^{n-r}\chi).
> $$
> Since $\lambda^0\chi=1$, its coefficient of $\Psi^n\chi$ is $(-1)^{n-1}$. Solving for this term expresses it as an integer linear combination of products of exterior-power characters and earlier $\Psi^r\chi$. Starting with $\Psi^1\chi=\chi$, induction proves $\Psi^n\chi\in X(G)$. This uses the independently proved Newton identity in [[06 - Representation Theory/Exercises/Exercise Rep145 - Symmetric and Exterior Character Series and Newton Identities|Lang XVIII.23]].
>
> **3. Coprime powers preserve the norm.** Let $e=\exp G$ and suppose $\gcd(n,e)=1$. Choose a positive integer $m$ with $mn\equiv1\pmod e$. For every $g\in G$,
> $$
> (g^n)^m=g^{nm}=g,\qquad(g^m)^n=g.
> $$
> Hence $g\mapsto g^n$ is a bijection of the underlying finite set, with inverse $g\mapsto g^m$. It follows that
> $$
> \langle\Psi^n\chi,\Psi^n\chi\rangle_G
> =\frac1{|G|}\sum_{g\in G}|\chi(g^n)|^2
> =\frac1{|G|}\sum_{h\in G}|\chi(h)|^2=1.
> $$
> Moreover $(\Psi^n\chi)(1)=\chi(1)>0$. By step 2 this function is in $X(G)$. Expanding it in the integral irreducible-character basis, norm one forces a single coefficient equal to $1$ or $-1$; positive degree rules out $-1$. Thus $\Psi^n\chi$ is effective and irreducible. This is precisely the criterion of [[06 - Representation Theory/Exercises/Exercise Rep144 - Recognizing an Irreducible Virtual Character|Lang XVIII.22]].

## Related Concepts

- [[06 - Representation Theory/Concepts/Character Rings and Adams Operations|Character Rings and Adams Operations]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Exercises/Exercise Rep144 - Recognizing an Irreducible Virtual Character|Recognizing an Irreducible Virtual Character]]
- [[06 - Representation Theory/Exercises/Exercise Rep145 - Symmetric and Exterior Character Series and Newton Identities|Character Newton Identities]]

## Notes

- **Source and proof status:** The unconditional printed statement was visually checked at [S2, Ch. XVIII, Exercise 24, printed p. 727, PDF p. 742]. The counterexample and the explicitly corrected coprime version are independent derivations; the added hypothesis is not attributed to the printed exercise.
- **The power map:** For nonabelian $G$, $g\mapsto g^n$ need not be a group homomorphism. Only its bijectivity as a set map is used above.
- **Sufficient, not necessary for each character:** A one-dimensional character remains one-dimensional under every positive power. The coprimality condition is a uniform sufficient condition for all irreducibles, rather than a necessary condition for a particular $\chi$.
