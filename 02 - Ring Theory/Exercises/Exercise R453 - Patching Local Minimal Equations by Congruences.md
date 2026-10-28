---
title: "Exercise R453: Patching Local Minimal Equations by Congruences"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.3, Exercise 8.3.2, printed p. 331, PDF p. 344"
source_refs:
  - "S7/ch-8/sec-3/ex-2"
created: 2026-10-28
---

# Exercise R453: Patching Local Minimal Equations by Congruences

## Problem Statement

> [!question] Original Exercise 8.3.2
> Let $E$ have integral coefficients $a_i$ and discriminant $\Delta$. For each $p\mid\Delta$, choose an admissible change $(u_p,r_p,s_p,t_p)\in\mathbb Q^4$, with $u_p\ne0$, giving integral coefficients $a_{i,p}'$ and discriminant $\Delta_p'=\Delta/u_p^{12}$ minimal at $p$. At primes not dividing $\Delta$ the discriminant is already minimal.
>
> (a) Explain why $\nu_p(u_p),\nu_p(r_p),\nu_p(s_p),\nu_p(t_p)\ge0$. (Hints are at the end of the book.)
>
> (b) Put $u=\prod_p p^{\nu_p(u_p)}$. Show that any admissible change $(u,r,s,t)$ gives discriminant $\Delta'=\pm\Delta_{\min}$.
>
> (c) Show that $r,s,t$ can make all $a_i'$ integral. The coefficient differences are
> $$
> \begin{aligned}
> ua_1'&=u_pa_{1,p}'+2(s-s_p),\\
> u^2a_2'&=u_p^2a_{2,p}'+3(r-r_p)-(a_1+s+s_p)(s-s_p),\\
> u^3a_3'&=u_p^3a_{3,p}'+a_1(r-r_p)+2(t-t_p),\\
> u^4a_4'&=u_p^4a_{4,p}'-a_3(s-s_p)+2a_2(r-r_p)-a_1(rs-r_ps_p+t-t_p)\\
> &\qquad+3(r^2-r_p^2)-2(st-s_pt_p),\\
> u^6a_6'&=u_p^6a_{6,p}'+a_4(r-r_p)-a_3(t-t_p)+a_2(r^2-r_p^2)-a_1(rt-r_pt_p)\\
> &\qquad+(r^3-r_p^3)-(t^2-t_p^2).
> \end{aligned}
> $$
> For example $\nu_p(a_1')+\nu_p(u)\ge\min\{\nu_p(a_{1,p}')+\nu_p(u_p),\nu_p(2)+\nu_p(s-s_p)\}$. Show that
> $$
> \min\{\nu_p(r-r_p),\nu_p(s-s_p),\nu_p(t-t_p)\}\ge6\nu_p(u)
> $$
> makes the coefficients integral. Apply the Chinese Remainder Theorem to find integers $r,s,t$ satisfying these conditions for every prime.

> **Context and notation.** $\nu_p$ is the exponent valuation on $\mathbb Q$, with $\nu_p(0)=+\infty$. The admissible change is $x=u^2x'+r$, $y=u^3y'+su^2x'+t$. The symbol $\Delta_{\min}>0$ denotes the product of prime powers with locally minimal exponents.

## Hints

> [!hint]- Hint 1
> First prove local integrality of the parameters; the primes $2$ and $3$ require higher weighted invariant formulas.

> [!hint]- Hint 2
> Approximate each locally integral rational parameter modulo $p^{6e_p}$ and apply the Chinese Remainder Theorem to the finitely many primes with $e_p>0$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) Minimality implies $0\le\nu_p(\Delta_p')\le\nu_p(\Delta)$, so $\nu_p(u_p)\ge0$. Write $r=r_p,s=s_p,t=t_p,u=u_p$ temporarily. Since $u$ and all transformed coefficients are $p$-integral, the weighted $a_i',b_i'$ of Exercise 8.1.1 are $p$-integral.
>
> The identity $12r=u^2b_2'-b_2$ first proves $r$ integral when $p\notin\{2,3\}$. If $p=3$ and $\nu_p(r)<0$, in
> $$
> u^6b_6'-b_6=2rb_4+r^2b_2+4r^3
> $$
> the last term has strictly smallest valuation (coefficient $4$ is a unit), contradicting integrality of the left side. If $p=2$, use
> $$
> u^8b_8'-b_8=3rb_6+3r^2b_4+r^3b_2+3r^4;
> $$
> its last term would again be uniquely of negative minimal valuation. Thus $r$ is integral at every prime.
>
> Next $2s=ua_1'-a_1$ proves integrality of $s$ outside $2$. At $2$, if $\nu_2(s)<0$, the term $-s^2$ in $u^2a_2'=a_2-sa_1+3r-s^2$ has strictly smaller valuation than all other terms, contradiction. Finally $2t=u^3a_3'-a_3-ra_1$ handles primes other than $2$. At $2$ use the $a_6'$ identity: all terms apart from $-ta_3-rta_1-t^2$ are integral; if $t$ had negative valuation, $-t^2$ would be uniquely of least valuation. This proves all assertions of (a).
>
> (b) Only finitely many exponents in the product are positive. The discriminant transformation depends on $u$ alone, not on $r,s,t$. At each prime,
> $$
> \nu_p(\Delta/u^{12})=\nu_p(\Delta)-12\nu_p(u_p)
> $$
> is the locally minimal exponent. Thus the rational number $\Delta/u^{12}$ has the prescribed absolute value $\Delta_{\min}$, proving the asserted signed equality.
>
> (c) Set $e_p=\nu_p(u)$. If $r,s,t$ are integers satisfying the three approximation conditions, all six parameters $r,s,t,r_p,s_p,t_p$ are $p$-integral. Any difference of their polynomial expressions, such as $rs-r_ps_p=(r-r_p)s+r_p(s-s_p)$, has valuation at least $6e_p$. The same follows for the square and cube differences by factoring. The first term on each right side, $u_p^ia_{i,p}'$, has valuation at least $ie_p$. Since $i\in\{1,2,3,4,6\}$, every other term has valuation at least $6e_p\ge ie_p$. Division by $u^i$ proves $a_i'$ $p$-integral.
>
> For the finitely many primes with $e_p>0$, part (a) permits representing $r_p,s_p,t_p$ by ordinary integer residue classes modulo $p^{6e_p}$: write each rational with denominator prime to $p$ and invert that denominator modulo the power. The Chinese Remainder Theorem independently chooses integers $r,s,t$ realizing these residues simultaneously. For all other primes $u$ is a unit; integral $r,s,t$ and the original coefficient transformation formulas already ensure integrality there. Thus each $a_i'$ is a rational number integral at every prime and belongs to $\mathbb Z$. The resulting integral equation is globally minimal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 331 / PDF p. 344. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
