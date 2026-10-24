---
title: 'Exercise R385: The Simple Zero Criterion for Henselian Valuation Rings'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 5, printed p. 152, PDF p. 171
source_refs:
- S4/ch-II/sec-6/ex-5
created: '2026-10-23'
---

# Exercise R385: The Simple Zero Criterion for Henselian Valuation Rings

## Problem Statement

> [!question] Neukirch II.6.5
> Let $K$ be a nonarchimedean valued field, $\mathfrak o$ its valuation ring and $\mathfrak p$ its maximal ideal. $K$ is henselian if and only if every $f(X)=X^n+a_{n-1}X^{n-1}+\cdots+a_0\in\mathfrak o[X]$ with $a_0\in\mathfrak p$ and $a_1\notin\mathfrak p$ has a zero in $\mathfrak p$.
>
> **Printed hint.** The Newton polygon.

## Hints

> [!hint]- Hint 1
> The forward implication lifts the simple residue root zero.

> [!hint]- Hint 2
> For the converse a failure of unique extension in a finite Galois extension gives a decomposition subgroup D. CRT constructs an integral element fixed by D whose minimal polynomial has exactly one zero residue root.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> If $K$ is henselian, the reduction of $f$ has the simple root zero because $\bar a_1\ne0$. The factor $X$ is relatively prime to the remaining factor. The source's monic Hensel factorization property, (6.7), printed p. 148 / PDF p. 167, lifts that linear factor to $X-b$ with $b\in\mathfrak p$, proving the forward implication.
>
> Here is a converse using the algebraic extension theory, as an alternative to the printed Newton-polygon hint. We import the source's independently proved valuation/prime correspondence and Galois transitivity from II §§8–9: for a finite Galois extension $N/K$, extensions of $v$ correspond to the maximal ideals of the integral closure $B$ of $\mathfrak o$ in $N$, and its Galois group $G$ acts transitively on them. Suppose there is more than one such prime, select $P$, and let $D$ be its stabilizer. CRT for the finitely many distinct maximal ideals gives $b\in B$ with $b\equiv0\pmod P$ and $b\equiv1$ at all other primes. Put $c=\prod_{\sigma\in D}\sigma b$. This element is integral, fixed by $D$, zero modulo $P$ and one modulo every other prime. Any $\tau\notin D$ sends it to an element that is one modulo $P$, hence cannot fix it. Its stabilizer is therefore exactly $D$.
>
> The minimal polynomial $F$ of $c$ over $K$ is monic with coefficients in $\mathfrak o$: those coefficients are integral and lie in $K$, and a valuation ring is integrally closed. Its conjugates are indexed by $G/D$. Exactly one is zero modulo $P$, and every other one is one there. Hence
> $$
> \bar F(X)=X(X-1)^{[G:D]-1}.
> $$
> Its constant coefficient is in $\mathfrak p$ and its linear coefficient is a unit. The assumed property gives a $K$-root, contradicting irreducibility of degree $[G:D]>1$. Thus the valuation has a unique extension to every finite Galois extension, and therefore to every separable algebraic extension by finite normal closure. Purely inseparable extensions have a unique extension by II.6.4. It follows that the valuation extends uniquely to every algebraic extension. The already proved equivalence (6.6), printed p. 147 / PDF p. 166, now gives henselianity.
>
> The later valuation/prime correspondence is an explicitly named source input, not an appeal to the current exercise; its proof does not use this simple-zero characterization. The unnumbered remark following the exercise, on finite algebras over general henselian local rings, is additional source material and is not treated as a sixth numbered exercise.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Henselian Fields and Henselization|Henselian Fields and Henselization]]

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §6, Exercise 5, printed p. 152, PDF p. 171].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
