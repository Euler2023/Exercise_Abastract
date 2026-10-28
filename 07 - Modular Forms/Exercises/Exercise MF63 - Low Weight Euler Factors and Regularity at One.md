---
title: "Exercise MF63: Low Weight Euler Factors and Regularity at One"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.9, Exercise 5.9.7, printed p. 208, PDF p. 222"
source_refs:
  - "S7/ch-5/sec-9/ex-7"
created: 2026-10-28
---

# Exercise MF63: Low Weight Euler Factors and Regularity at One

## Problem Statement

> [!question] Original Exercise 5.9.7
> (a) Convince yourself that parts (a–c) of the previous exercise hold for $k=2$ and for $k=1$, including the exceptional case $k=2$ and $\psi=\varphi=1$.
>
> (b) Recall that the Riemann zeta function $\zeta(s)$ has a meromorphic continuation to all of $\mathbb C$, with $\zeta(s)\sim1/(s-1)$ near $s=1$ and $\zeta(0)=-1/2$. Let $f_t(\tau)=E_2(\tau)-tE_2(t\tau)$. Show that $L(s,f_t)=(1-t^{1-s})\zeta(s)\zeta(s-1)$, and that this function is holomorphic at $s=1$ with $L(1,f_t)=-\frac12\log t$.
>
> (c) Determine the $L$-functions of the eigenforms from Exercise 5.2.6(b–d). Confirm that these $L$-functions are holomorphic at $s=1$.

> [!warning] Source issue and corrected scope
> Part (a) needs unordered-pair uniqueness at weight one, as in Theorem 4.8.1. Part (c) inherits two defects of Exercise 5.2.6: its two level-$q^2$ forms span only the trivial-pair block for $q>2$, and $f_t-f_{pt}$ is not generally a simultaneous eigenform. The full squarefree alternating sum is nonzero only for $N>1$. The original exercise is preserved and these distinctions are explicit below.

## Hints

> [!hint]- Hint 1
> At weight two the growing term still separates the ordered characters. At weight one, linear independence of characters determines an unordered pair.

> [!hint]- Hint 2
> Use $L(s,F(t\tau))=t^{-s}L(s,F)$ and expand $1-t^{1-s}$ at $s=1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a), weight two.** Apart from the trivial pair, the Eisenstein basis theorem in weight two (Theorem 4.6.2, printed p.133/PDF p.147) gives the same pair blocks as in Exercise 5.9.6. Its annihilating-operator proof of existence and componentwise proof of block membership apply unchanged. Uniqueness uses primes in each unit residue class and division by $p$, so it also applies unchanged.
>
> For the exceptional trivial pair the modular block has basis $f_t=E_2-tE_2(t\tau)$ for $t\mid N$, $t>1$. The space is absent when $N=1$. The coefficient computations in Exercise 5.2.6(a) show this block is stable under every Hecke operator; at $p\nmid N$ all its vectors have eigenvalue $1+p$. The annihilating-operator proof uses those good primes for this block and still gives existence. The prime-growth uniqueness argument separates this pair from every other ordered pair. The direct-sum block argument then proves membership, without asserting that the quasimodular $E_2$ itself is modular.
>
> **Weight one.** Theorem 4.8.1 (printed p.141/PDF p.155) indexes the basis by unordered primitive pairs, because $\sigma_0^{\psi,\varphi}(n)=\sigma_0^{\varphi,\psi}(n)$. With that convention the same annihilation argument proves existence. If two pairs have the same good-prime eigenvalues, Dirichlet's theorem gives $\psi+\varphi=\psi'+\varphi'$ on $(\mathbb Z/N\mathbb Z)^*$. Distinct characters of a finite abelian group are linearly independent: multiplying a relation by the conjugate of one character and summing over the group isolates its coefficient, by the finite geometric-sum orthogonality relation. Thus the two multisets of lifted characters coincide, including their multiplicities. Primitive-character uniqueness identifies the unordered primitive pairs. Componentwise comparison proves membership as before. Ordered-pair uniqueness is false at weight one, and is not being asserted.
>
> **(b).** In the normalization $E_2=-1/24+\sum_{n\ge1}\sigma_1(n)q^n$, absolute convergence for $\operatorname{Re}s>2$ gives $L(s,E_2)=\zeta(s)\zeta(s-1)$ by divisor convolution. Scaling the argument gives
> $$
> L(s,f_t)=(1-t^{1-s})\zeta(s)\zeta(s-1).
> $$
> Put $h=s-1$. Then $1-t^{-h}=h\log t+O(h^2)$, $\zeta(1+h)=h^{-1}+O(1)$, and $\zeta(h)=-1/2+O(h)$. The pole is removable and the value is $-\tfrac12\log t$. For $t=1$ both sides are identically zero.
>
> **(c), level $q^2$ trivial-pair block.** Put $Z(s)=\zeta(s)\zeta(s-1)$. The normalized eigenforms are $f_q$ and $((1+q)f_q-f_{q^2})/q$. Linearity and (b) give respectively
> $$
> (1-q^{1-s})Z(s),\qquad (1-q^{-s})(1-q^{1-s})Z(s).
> $$
> These are the entire Eisenstein eigenbasis only for $q=2$; for $q>2$ the other primitive-pair blocks remain, as the visible correction to Exercise 5.2.6(b) explains.
>
> At level $qr$ with distinct primes, the normalized versions of the three printed eigenforms are $f_q+f_r-f_{qr}$, $(f_q+qf_r-f_{qr})/q$, and $(rf_q+f_r-f_{qr})/r$. Their $L$-functions are respectively
> $$
> (1-q^{1-s})(1-r^{1-s})Z(s),\quad (1-q^{-s})(1-r^{1-s})Z(s),\quad (1-q^{1-s})(1-r^{-s})Z(s).
> $$
> For squarefree $N>1$, the printed alternating sum $F_N=\sum_{d\mid N}\mu(d)f_d$ has first coefficient $-1$. Its normalized form $-F_N$ has
> $$
> L(s,-F_N)=\prod_{p\mid N}(1-p^{1-s})Z(s).
> $$
> Indeed $\sum_{d\mid N}\mu(d)=0$ and expanding the product gives $\sum_{d\mid N}\mu(d)d^{1-s}$. This includes the three-prime form in part (d). Each displayed normalized $L$-function has at least one factor $1-p^{1-s}$, which cancels the simple pole of $\zeta(s)$ at $1$; $\zeta(s-1)$ is regular there. Hence each is holomorphic at $1$.
>
> For completeness, the intermediate expression $f_t-f_{pt}$ in Exercise 5.2.6(d) is generally only a $T_p$ eigenvector, not a simultaneous eigenform. Its Dirichlet series is nevertheless $-t^{1-s}(1-p^{1-s})Z(s)$ and is also holomorphic at $1$. No nonexistent simultaneous-eigenform assertion is used.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]
- [[07 - Modular Forms/Concepts/Eisenstein Series]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.9.7, printed p. 208 / PDF p. 222]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
