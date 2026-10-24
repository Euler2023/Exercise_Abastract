---
title: "Exercise R340: Quotients of Dedekind Domains Are Principal Ideal Rings"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 5, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise R340: Quotients of Dedekind Domains Are Principal Ideal Rings

## Problem Statement

> [!question] Neukirch I.3.5 — printed statement
> The quotient ring $\mathfrak o/\mathfrak a$ of a Dedekind domain by an ideal $\mathfrak a\ne0$ is a principal ideal domain.
>
> **Original hint:** For $\mathfrak a=\mathfrak p^n$ the only proper ideals of $\mathfrak o/\mathfrak a$ are given by $\mathfrak p/\mathfrak p^n,\ldots,\mathfrak p^{n-1}/\mathfrak p^n$. Choose $\pi\in\mathfrak p\setminus\mathfrak p^2$ and show that $\mathfrak p^\nu=\mathfrak o\pi^\nu+\mathfrak p^n$.

> [!warning] Source issue: the printed conclusion is false
> Take $\mathfrak o=\mathbb Z$ and $\mathfrak a=(4)$. In $\mathbb Z/4\mathbb Z$, the nonzero element $\overline2$ satisfies $\overline2^{\,2}=0$. Thus the quotient is not an integral domain and cannot be a principal ideal domain. The valid conclusion is **principal ideal ring**: every ideal of the quotient is principal. The printed hint also omits the zero ideal $\mathfrak p^n/\mathfrak p^n$ from its list of proper ideals. The original wording is retained above.

> [!abstract] Corrected statement
> If $R$ is a Dedekind domain and $0\ne\mathfrak a\subseteq R$ is an integral ideal, then $R/\mathfrak a$ is a principal ideal ring. When $\mathfrak a=R$, the quotient is the zero ring, whose only ideal is principal. No integral-domain conclusion is asserted.

## Hints

> [!hint]- Hint 1: Classify the prime-power quotient ideals
> Ideals of $R/\mathfrak p^n$ correspond to ideals $J$ with $\mathfrak p^n\subseteq J\subseteq R$. Prime-ideal factorization gives $J=\mathfrak p^\nu$ with $0\le\nu\le n$. Include the unit ideal at $\nu=0$ and the zero quotient ideal at $\nu=n$.

> [!hint]- Hint 2: Find a local generator
> Choose $\pi\in\mathfrak p\setminus\mathfrak p^2$ and factor $(\pi)=\mathfrak p\mathfrak c$ with $\mathfrak c+\mathfrak p=R$. For $0<\nu<n$, factor $\mathfrak p^\nu$ out of $(\pi^\nu)+\mathfrak p^n$ and show that the remaining two ideals are comaximal.

> [!hint]- Hint 3: Combine the prime-power quotients
> Factor $\mathfrak a$ and apply the Chinese remainder theorem. An ideal in a finite product of rings is the product of its coordinate ideals; multiply by the coordinate idempotents to verify this. A tuple of generators generates that product ideal.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation of the corrected statement
>
> The counterexample in the source warning refutes the printed domain assertion. We prove that every ideal of the quotient is principal.
>
> **1. A quotient by a prime power.** Let $\mathfrak p$ be a nonzero prime ideal of $R$ and let $n\ge1$. By the ideal-correspondence theorem, every ideal of $R/\mathfrak p^n$ is $J/\mathfrak p^n$ for an ideal $J$ satisfying $\mathfrak p^n\subseteq J\subseteq R$. Since $J\ne0$, unique prime-ideal factorization and reversal of containment and divisibility give
> $$
> J=\mathfrak p^\nu,\qquad 0\le\nu\le n.
> $$
> To see the factorization restriction explicitly, $\mathfrak p^n\subseteq J$ makes $\mathfrak p^nJ^{-1}$ an integral ideal: it is contained in $JJ^{-1}=R$. Factoring this ideal in $\mathfrak p^n=J(\mathfrak p^nJ^{-1})$ leaves only $\mathfrak p$ as a possible prime factor of $J$ and bounds its exponent by $n$.
>
> Invertibility gives $\mathfrak p^2\ne\mathfrak p$, so choose $\pi\in\mathfrak p\setminus\mathfrak p^2$. The exponent of $\mathfrak p$ in $(\pi)$ is exactly $1$. Thus
> $$
> (\pi)=\mathfrak p\mathfrak c,
> $$
> where $\mathfrak c$ is an integral ideal not divisible by $\mathfrak p$. We have $\mathfrak c+\mathfrak p=R$: otherwise a maximal ideal containing their sum would contain $\mathfrak p$, hence equal $\mathfrak p$, contradicting $\mathfrak c\nsubseteq\mathfrak p$.
>
> For $0<\nu<n$, positive powers of comaximal ideals remain comaximal, so $\mathfrak c^\nu+\mathfrak p^{n-\nu}=R$. Indeed, expanding $1=(u+v)^{n-1}$ for $u\in\mathfrak c$, $v\in\mathfrak p$, $u+v=1$, puts every term in one of these two powers. Therefore
> $$
> (\pi^\nu)+\mathfrak p^n
> =\mathfrak p^\nu\bigl(\mathfrak c^\nu+\mathfrak p^{n-\nu}\bigr)
> =\mathfrak p^\nu.
> $$
> The same identity holds at the endpoints: for $\nu=0$ it reads $(1)+\mathfrak p^n=R$, and for $\nu=n$ it follows from $\pi^n\in\mathfrak p^n$. Passing to the quotient gives
> $$
> \mathfrak p^\nu/\mathfrak p^n
> =\bigl(\pi^\nu+\mathfrak p^n\bigr)
> \quad\text{as an ideal of }R/\mathfrak p^n.
> $$
> Hence every ideal of $R/\mathfrak p^n$ is principal. This includes the zero ideal when $\nu=n$, even when $n=1$ and the printed list has no entries.
>
> **2. An arbitrary nonzero proper ideal.** Factor
> $$
> \mathfrak a=\prod_{i=1}^r\mathfrak p_i^{n_i},\qquad n_i\ge1,
> $$
> with distinct nonzero prime ideals. These prime powers are pairwise comaximal, and the Chinese remainder theorem yields
> $$
> R/\mathfrak a\simeq\prod_{i=1}^r R/\mathfrak p_i^{n_i}.
> $$
> Put $S_i=R/\mathfrak p_i^{n_i}$ and let $L$ be an ideal of $\prod_iS_i$. Write $L_i$ for its image under the $i$th projection. Then $L\subseteq\prod_iL_i$. Conversely, for $x_i\in L_i$ choose an element of $L$ with $i$th coordinate $x_i$. Multiplying it by the coordinate idempotent $e_i=(0,\ldots,1,\ldots,0)$ gives the tuple supported only in coordinate $i$ with value $x_i$. Summing these tuples proves
> $$
> L=\prod_{i=1}^rL_i.
> $$
> Step 1 gives $L_i=(b_i)$ in $S_i$. Multiplication is coordinatewise, so
> $$
> L=\bigl((b_1,\ldots,b_r)\bigr).
> $$
> The ring isomorphism transfers this principal-generation statement to every ideal of $R/\mathfrak a$.
>
> Finally, if $\mathfrak a=R$, the quotient is the zero ring, and its only ideal is generated by $0$. This proves the corrected statement in every case.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Isomorphism Theorems for Rings|Isomorphism Theorems for Rings]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source status:** The statement and complete printed hint were visually checked at [S4, Ch. I, §3, Exercise 5, printed p. 23, PDF p. 42]. The printed phrase “principal ideal domain” is preserved and refuted above. The correction to “principal ideal ring,” the counterexample, and the full proof are independent vault work, not a textbook proof. No source figure is needed.
- **Source inputs:** Theorem (3.3), printed pp. 18–20 / PDF pp. 37–39, supplies unique ideal factorization; Theorem (3.6), printed p. 21 / PDF p. 40, supplies CRT; Proposition (3.8), printed pp. 21–22 / PDF pp. 40–41, supplies inverses of nonzero ideals. These original-page images were checked. The ideal-correspondence theorem is an imported prerequisite from the linked ring-isomorphism concept. The proof expands the local-generation and product-ideal steps.
- **Terminology:** A principal ideal ring is a commutative ring in which every ideal is principal; it can have zero divisors. A principal ideal domain additionally has to be an integral domain. The zero-ring endpoint is included only in the principal-ideal-ring conclusion.
- **Method boundary and routing:** The condition $\mathfrak a\ne0$ is essential: taking $\mathfrak a=(0)$ would assert that every Dedekind domain is principal. All primary calculations concern ideal factorization, quotient ideals, and CRT, so the note belongs in Ring Theory.
