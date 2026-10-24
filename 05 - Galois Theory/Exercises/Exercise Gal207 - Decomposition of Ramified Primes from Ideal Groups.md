---
title: 'Exercise Gal207: Decomposition of Ramified Primes from Ideal Groups'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 1, printed p. 413, PDF p. 432
source_refs:
- S4/ch-VI/sec-7/ex-1
created: '2026-10-23'
---

# Exercise Gal207: Decomposition of Ramified Primes from Ideal Groups

## Problem Statement

> [!question] Neukirch VI.7.1
> The decomposition law for the prime ideals $\mathfrak p$ which are ramified in an abelian extension $L|K$ can be formulated like this. Let $\mathfrak f$ be the conductor of $L|K$, $H^{\mathfrak f}\subseteq J_K^{\mathfrak f}$ the ideal group for $L$, and $H_{\mathfrak p}$ the smallest ideal group containing $H^{\mathfrak f}$ of conductor prime to $\mathfrak p$.
> If $e=(H_{\mathfrak p}:H^{\mathfrak f})$ and $\mathfrak p^f$ is the smallest power of $\mathfrak p$ which belongs to $H_{\mathfrak p}$, then
> $$
> \mathfrak p=(\mathfrak P_1\cdots\mathfrak P_r)^e,
> $$
> where the $\mathfrak P_i$ are of degree $f$ over $K$, and $r=n/(ef)$, $n=[L:K]$.
> **Printed hint:** The class field for $H_{\mathfrak p}$ is the inertia field above $\mathfrak p$.

## Hints

> [!hint]- Hint
> Interpret ideal groups as equivalence classes over moduli. The index is the inertia-group order; the least power records the Frobenius order after removing inertia.

> [!hint]- Stronger hint
> The enlarged ideal group corresponds to inertia; the order of the remaining Frobenius gives the residue degree.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> First clarify the ideal-group convention for different moduli. The index $(H_\mathfrak p:H^\mathfrak f)$ must be computed after restriction to a common modulus. In contrast, $\mathfrak p^f\in H_\mathfrak p$ uses representatives for its smaller conductor coprime to $\mathfrak p$. Otherwise, simply adjoining $\mathfrak p$ to the allowed ideal generators and taking a literal index gives an incorrect infinite index.
> Under the Artin isomorphism $J_K^\mathfrak f/H^\mathfrak f\cong G(L/K)$, the enlarged ideal group in the question corresponds to the inertia subgroup $I_\mathfrak p$. Its fixed field $Z=L^{I_\mathfrak p}$ is unramified at $\mathfrak p$ and is the largest subfield of $L$ with that property. This is precisely the minimal enlargement of the ideal group allowing $\mathfrak p$ to be removed from the conductor. Thus $e=|I_\mathfrak p|$ is the ramification index.
> In $Z/K$, the order of the Frobenius of $\mathfrak p$ in the quotient $G/I_\mathfrak p$ is, by the ideal Artin map, exactly the least positive exponent for which $\mathfrak p^f$ belongs to $H_\mathfrak p$. It is also the residue-extension degree $f=|D_\mathfrak p/I_\mathfrak p|$.
> Since $L/K$ is Galois, the values $e,f$ agree for all primes above the given prime. The fundamental identity $\sum_{\mathfrak P\mid\mathfrak p}e_\mathfrak P f_\mathfrak P=[L:K]$ gives $r=[L:K]/ef$, and the ideal factorization follows in the stated form.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Groups]]

## Notes

The statement was checked against the original 200 dpi images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 1, printed p.413, PDF p.432]. The solution is independently derived.
