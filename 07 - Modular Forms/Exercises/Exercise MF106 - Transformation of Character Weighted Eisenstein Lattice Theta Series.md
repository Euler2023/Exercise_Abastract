---
title: "Exercise MF106: Transformation of Character Weighted Eisenstein Lattice Theta Series"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.11, Exercise 4.11.4, printed p. 162, PDF p. 176"
source_refs:
  - "S7/ch-4/sec-11/ex-4"
created: 2026-10-28
---

# Exercise MF106: Transformation of Character Weighted Eisenstein Lattice Theta Series

## Problem Statement

> [!question] Original Exercise 4.11.4
> Verify the transformation law in Theorem4.11.3.
>
> Let $\chi:(A/NA)^\times\to\mathbb C^\times$ be a character, extended by zero on nonunits. Define $\theta_\chi(\tau)=\frac16\sum_{u\in A/NA}\chi(u)\theta_u(N\tau,N)$. The theorem asserts $\theta_\chi[\gamma]_1=\chi(d)(d/3)\theta_\chi$ for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(3N^2)$, and hence $\theta_\chi\in M_1(3N^2,\psi)$ with $\psi(d)=\chi(d)(d/3)$.

## Hints

> [!hint]- Hint 1
> Conjugate by $\delta=\operatorname{diag}(N,1)$ and use Proposition4.11.2.

> [!hint]- Hint 2
> Reindex the finite sum by $w=au$; modulo $N$, $a^{-1}=d$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\delta=\operatorname{diag}(N,1)$ and $\gamma'=\delta\gamma\delta^{-1}$. Its upper-right entry is $Nb$ and lower-left entry is $c/N$, so $\gamma'\in\Gamma_0(3N,N)$, and its diagonal entries remain $a,d$. Proposition4.11.2 gives $\theta_u[\gamma']_1=(d/3)\theta_{au}$. By associativity of the positive-determinant slash operation,
> $$
> (\theta_u[\delta]_1)[\gamma]_1=(\theta_u[\gamma']_1)[\delta]_1=(d/3)\theta_{au}[\delta]_1.
> $$
> The factor relating $\theta_u[\delta]_1$ to $\theta_u(N\tau,N)$ is the common scalar $\sqrt N$, which cancels from the finite combination. Therefore
> $$
> \theta_\chi[\gamma]_1=\frac16(d/3)\sum_u\chi(u)\theta_{au}(N\tau,N).
> $$
> The integer $a$ is a unit modulo $N$. Set $w=au$ and use $ad\equiv1\pmod N$ to obtain $\chi(u)=\chi(a^{-1}w)=\chi(d)\chi(w)$, including zero values on nonunits. This gives the asserted transformation law.
>
> For completeness, reindexing $n=u+Nm$ gives $\theta_\chi=\frac16\sum_{n\in A}\chi(n)q^{|n|^2}$. The positive definite norm yields local normal convergence and a Fourier expansion with nonnegative integral exponents. The number of lattice points of norm $m$ is $O(m+1)$ by enclosing them in a radius-$\sqrt m$ disk, so its coefficients grow polynomially. The holomorphy-at-cusps criterion Proposition1.2.4, for a holomorphic weakly modular function on a congruence subgroup with polynomially bounded Fourier coefficients, then supplies holomorphy at every cusp. This proves membership in the asserted modular space; if the character parity is incompatible, the theta combination is identically zero, which also satisfies the claim.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 162 / PDF 176. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
