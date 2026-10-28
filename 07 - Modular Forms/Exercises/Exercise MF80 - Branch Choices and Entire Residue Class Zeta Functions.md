---
title: "Exercise MF80: Branch Choices and Entire Residue Class Zeta Functions"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.4, Exercise 4.4.5, printed pp. 125\u2013126, PDF pp. 139\u2013140"
source_refs:
  - "S7/ch-4/sec-4/ex-5"
created: 2026-10-28
---

# Exercise MF80: Branch Choices and Entire Residue Class Zeta Functions

## Problem Statement

> [!question] Original Exercise 4.4.5
> Take the nonpositive imaginary axis as a branch cut in the $z$-plane, so that $\arg(z)\in(-\pi/2,3\pi/2)$ on the remaining set and $\log z=\ln|z|+i\arg z$ is single-valued and analytic there. Define $z^s=e^{s\log z}$ off that cut.
>
> (a) Show that $(-r)^s=(-1)^sr^s$ for every positive real $r$ and every $s\in\mathbb C$, even though $(zw)^s=z^sw^s$ does not hold in general.
>
> (b) Show that for $n\in G_N$,
> $$
> \zeta^n(s)=\zeta_+^n(s)+(-1)^{-s}\zeta_+^{-n}(s),\qquad\operatorname{Re}s>1.
> $$
> (c) It follows that
> $$
> \zeta^n(s)=\frac1{\phi(N)}\sum_{\chi\in\widehat G_N}(\chi(n^{-1})+(-1)^{-s}\chi((-n)^{-1}))L(s,\chi).
> $$
> This continues meromorphically to the full plane, with the only possible pole coming from $\chi=1_N$. Show that the limit of that summand at $s=1$ is $\pi i/N$. Thus the continuation of $\zeta^n$ is entire. (Hints for this exercise are at the end of the book.)
>
> (d) For $\chi\ne1_N$ the continuation of $L(s,\chi)$ is bounded at $s=1$. Show that for $N>1$,
> $$
> \zeta^n(1)=\frac{\pi i}{N}+\frac1{\phi(N)}\sum_{\chi\ne1_N}(\chi(n^{-1})-\chi((-n)^{-1}))L(1,\chi)=\frac{\pi i}{N}+\frac\pi N\cot(\pi n/N).
> $$
> Here $\zeta^n(s)=\sum_{m\equiv n\ (N)}'m^{-s}$ includes positive and negative integers with this branch, and $\zeta_+^n$ includes only positive integers.

## Hints

> [!hint]- Hint 1
> On the chosen branch $\log(-r)=\log r+i\pi$, hence $(-1)^{-s}=e^{-i\pi s}$.

> [!hint]- Hint 2
> At $s=1$, the principal-character coefficient has a simple zero which cancels the pole of its $L$-function.

> [!hint]- Hint 3
> Pair the two positive residue-class harmonic sums; their difference converges and is the cotangent partial fraction.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Positive $r$ has argument $0$ and $-r$ has argument $\pi$. Therefore $\log(-r)=\log r+i\pi=\log r+\log(-1)$; exponentiating after multiplication by $s$ gives the stated equality. This calculation uses these particular arguments, not a general multiplicative power law.
>
> **(b).** In the absolutely convergent series, separate positive $m$ from negative $m=-r$. The latter condition is $r>0$, $r\equiv-n\pmod N$, and (a) gives $(-r)^{-s}=e^{-i\pi s}r^{-s}$. This yields the required formula.
>
> **(c).** Character orthogonality gives $\boldsymbol1_{m\equiv n\ (N)}=\phi(N)^{-1}\sum_\chi\chi(m)\chi(n^{-1})$ on positive integers (both sides vanish on nonunits). Summing absolutely produces $\zeta_+^n(s)=\phi(N)^{-1}\sum_\chi\chi(n^{-1})L(s,\chi)$, and (b) gives the printed formula. We use the analytic-continuation theorem for Dirichlet $L$-functions recalled in §4.4: a nonprincipal character has entire $L$-function; the principal one has only the simple pole at $1$. From Exercise 4.4.4,
> $$
> \operatorname{Res}_{s=1}L(s,1_N)=\frac{\phi(N)}N.
> $$
> Both principal character values in the coefficient are $1$, and $1+e^{-i\pi s}=i\pi(s-1)+O((s-1)^2)$. Its contribution therefore has removable singularity and value $\pi i/N$. All other contributions are entire. This proves that $\zeta^n$ is entire, including $N=1$.
>
> **(d).** For $N>1$ choose the representative $a$ of $n$ with $1\le a<N$. At $s=1$, the nonprincipal coefficient becomes $\chi(n^{-1})-\chi((-n)^{-1})$, giving the first equality. It remains to identify that real-residue difference. For $\operatorname{Re}s>1$ define $D(s)=\zeta_+^a(s)-\zeta_+^{-a}(s)$. The paired series
> $$
> D(s)=\sum_{r\ge0}\bigl((a+Nr)^{-s}-(N-a+Nr)^{-s}\bigr)
> $$
> converges locally uniformly for $\operatorname{Re}s>0$, since a mean-value integral in the real variable bounds its $r$th term by $C_Kr^{-\operatorname{Re}s-1}$ on compact sets. Thus
> $$
> D(1)=\frac1a+\sum_{r\ge1}\left(\frac1{a+Nr}+\frac1{a-Nr}\right)=\frac\pi N\cot(\pi a/N),
> $$
> by the cotangent partial-fraction identity. The character expression for $D$ has no principal contribution, so this is exactly the nonprincipal sum in the first equality. Adding the separately computed $\pi i/N$ proves the second equality. The imaginary term reflects the chosen branch and analytic continuation; a symmetric real principal-value sum alone would omit it.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.4.5, printed pp. 125–126 / PDF pp. 139–140]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Formula (4.22) is on printed p.123/PDF p.137, and the branch is prescribed in the exercise on printed pp.125–126/PDF pp.139–140. The named analytic inputs are Dirichlet $L$-function continuation and the cotangent partial-fraction formula. The residue computation is explicit and does not silently replace the branch-dependent sum by a real harmonic series.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
