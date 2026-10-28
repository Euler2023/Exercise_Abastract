---
title: "Exercise MF41: Well Defined Orders at Cusps"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.2, Exercise 3.2.1, printed p. 76, PDF p. 90"
source_refs:
  - "S7/ch-3/sec-2/ex-1"
created: 2026-10-28
---

# Exercise MF41: Well Defined Orders at Cusps

## Problem Statement

> [!question] Original Exercise 3.2.1
> Let $f\in\mathcal A_k(\Gamma)$ be an automorphic form and let $s\in\mathbb Q\cup\{\infty\}$ be a cusp. Show that the definition of $\nu_s(f)$ given in the text is independent of the choice of $\alpha$ and well defined on the quotient $X(\Gamma)$.
>
> **Definition, printed p. 72 / PDF p. 86.** If $\alpha\in SL_2(\mathbb Z)$ takes $\infty$ to $s$, define $\nu_s(f)=\nu_\infty(f[\alpha]_k)$. The order at infinity is the first nonzero Laurent exponent in $q_\ell=e^{2\pi i\tau/\ell}$, where $\ell>0$ is the least integer with $T^\ell\in\alpha^{-1}\Gamma\alpha$ and $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. The zero function has order $\infty$.

## Hints

> [!hint]- Hint 1
> Two choices of $\alpha$ differ on the right by $\pm T^n$. Translation multiplies each Laurent coefficient by a nonzero constant.

> [!hint]- Hint 2
> For another representative $\eta s$ of the same cusp, choose the straightening inverse $\eta\alpha$ and use $f[\eta]_k=f$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> If $f=0$, every order under discussion is $\infty$, so suppose $f\ne0$. Let $\alpha,\alpha'$ both take $\infty$ to $s$. Then $\alpha^{-1}\alpha'$ fixes infinity and has the form $\epsilon T^n$, where $\epsilon=\pm1$ and $n\in\mathbb Z$.
>
> Put $g=f[\alpha]_k$ and $H=\alpha^{-1}\Gamma\alpha$. Conjugation by $\epsilon T^n$ fixes every translation $T^r$, so the least positive translation in $(\alpha')^{-1}\Gamma\alpha'$ is the same $\ell$ as for $H$. The composition law for slash operators gives
> $$
> f[\alpha']_k=g[\epsilon T^n]_k=\epsilon^{-k}g(\tau+n).
> $$
> If $g=\sum_{r\ge m}a_rq_\ell^r$ with $a_m\ne0$, then
> $$
> \epsilon^{-k}g(\tau+n)
> =\sum_{r\ge m}\epsilon^{-k}a_r e^{2\pi irn/\ell}q_\ell^r.
> $$
> Every multiplier is nonzero, so the first exponent remains $m$. This proves independence of $\alpha$.
>
> If $s'=\eta s$ with $\eta\in\Gamma$, use $\alpha'=\eta\alpha$. Then
> $$
> (\alpha')^{-1}\Gamma\alpha'=\alpha^{-1}\Gamma\alpha,\qquad
> f[\alpha']_k=(f[\eta]_k)[\alpha]_k=f[\alpha]_k.
> $$
> The Laurent series and its translation length are identical, so $\nu_{s'}(f)=\nu_s(f)$. Hence this cusp-representative order is well defined on cusp orbits.
>
> The later normalized order $\nu_{\pi(s)}(f)$ uses the actual cusp coordinate of width $h$. It equals $\nu_s(f)$ at a regular cusp and $\nu_s(f)/2$ at an irregular cusp, as in (3.3). Regularity, $h$ and $\ell$ are also invariant under these conjugations, so that normalized order is well defined too.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 76 / PDF 90. The solution above is independently derived.
- **Notation boundary:** The initial integer order in the matrix translation period is distinguished from the possibly half-integral normalized order in the surface coordinate; the latter is defined on printed pp. 74–75 / PDF pp. 88–89.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
