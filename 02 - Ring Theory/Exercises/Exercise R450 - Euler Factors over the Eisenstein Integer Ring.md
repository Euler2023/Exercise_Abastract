---
title: "Exercise R450: Euler Factors over the Eisenstein Integer Ring"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.9, Exercise 5.9.4, printed p. 208, PDF p. 222"
source_refs:
  - "S7/ch-5/sec-9/ex-4"
created: 2026-10-28
---

# Exercise R450: Euler Factors over the Eisenstein Integer Ring

## Problem Statement

> [!question] Original Exercise 5.9.4
> Establish formula (5.28).
>
> Let $A=\mathbb Z[\mu_3]$, let $\chi:(A/NA)^*\to\mathbb C^*$ be trivial on $A^*$, extended by zero on nonunits modulo $NA$, and let $\theta_\chi$ have coefficients $a_m=\frac16\sum_{n\in A,\ |n|^2=m}\chi(n)$. For split primes choose $\pi_p\overline\pi_p=p$. Formula (5.28) is
> $$
> L_p(s,\theta_\chi)=
> \begin{cases}
> \bigl(1-(\chi(\pi_p)+\chi(\overline\pi_p))p^{-s}+\chi(p)p^{-2s}\bigr)^{-1},&p\equiv1\pmod3,\\
> (1-\chi(p)p^{-2s})^{-1},&p\equiv2\pmod3,\\
> (1-\chi(\sqrt{-3})3^{-s})^{-1},&p=3.
> \end{cases}
> $$

## Hints

> [!hint]- Hint 1
> Use unique factorization in the Eisenstein integer ring and divide by its six units.

> [!hint]- Hint 2
> A split prime gives two norm-$p$ factors, an inert prime one norm-$p^2$ factor, and the ramified prime one norm-$3$ factor.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> We use the arithmetic of the Eisenstein integers stated in the source: $A$ is a principal ideal domain with six units; primes $p\equiv1\pmod3$ factor into the two nonassociate primes $\pi_p,\overline\pi_p$ of norm $p$; primes $p\equiv2\pmod3$ remain prime of norm $p^2$; and $3$ has one prime up to associates, $\sqrt{-3}$, of norm $3$. These facts are the imported ring-theoretic inputs.
>
> Choose one generator of each prime ideal, collecting them into $\mathcal S$. Every nonzero $n\in A$ has a unique factorization $n=u\prod_{\pi\in\mathcal S}\pi^{r_\pi}$, with $u\in A^*$ and finitely many positive exponents. Since $\chi(u)=1$, both the norm and character are unchanged under the six unit multiples. The coefficient definition therefore gives
> $$
> L(s,\theta_\chi)=\frac16\sum_{0\ne n\in A}\chi(n)|n|^{-2s}=\prod_{\pi\in\mathcal S}(1-\chi(\pi)|\pi|^{-2s})^{-1}.
> $$
> This is valid at least for $\operatorname{Re}s>1$: the absolute lattice sum converges there, since the number of lattice points in a disk of radius $R$ is $O(R^2)$, and dyadic annuli give a convergent sum $\sum_jO(2^{(2-2\sigma)j})$.
>
> For $p\equiv1\pmod3$, group its two factors and put $X=p^{-s}$. Their product is
> $$
> \frac1{(1-\chi(\pi_p)X)(1-\chi(\overline\pi_p)X)}=\frac1{1-(\chi(\pi_p)+\chi(\overline\pi_p))X+\chi(p)X^2},
> $$
> using multiplicativity even when a character value is zero. For $p\equiv2\pmod3$, the one prime generator is $p$ and its norm is $p^2$, giving $(1-\chi(p)p^{-2s})^{-1}$. For $p=3$, the prime generator has norm $3$, giving $(1-\chi(\sqrt{-3})3^{-s})^{-1}$. These are all the asserted cases. Changing a prime generator by a unit changes no character value because of the assumed unit triviality.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion]]
- [[02 - Ring Theory/Concepts/Formal Power Series]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.9.4, printed p. 208 / PDF p. 222]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The prime factorization discussion begins on printed p.203/PDF p.217; formula (5.28), the six-unit factor, and the coefficient normalization are on printed p.204/PDF p.218.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
