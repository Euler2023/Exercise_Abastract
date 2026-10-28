---
title: "Exercise R451: Polynomial Identities for General Weierstrass Changes"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.1, Exercise 8.1.1, printed pp. 318\u2013319, PDF pp. 331\u2013332"
source_refs:
  - "S7/ch-8/sec-1/ex-1"
created: 2026-10-28
---

# Exercise R451: Polynomial Identities for General Weierstrass Changes

## Problem Statement

> [!question] Original Exercise 8.1.1
> (Suggestion: Don't do this problem by hand.)
>
> (a) Confirm $4b_8=b_2b_6-b_4^2$ and $1728\Delta=c_4^3-c_6^2$. Confirm that, if $\operatorname{char}k\ne2$, replacing $y$ by $y-(a_1x+a_3)/2$ gives
> $$
> y^2=x^3+(b_2x^2+2b_4x+b_6)/4.\tag{8.2}
> $$
> Confirm that, if $\operatorname{char}k\notin\{2,3\}$, replacing $(x,y)$ by $((x-3b_2)/36,y/216)$ in (8.2) gives
> $$
> y^2=x^3-27c_4x-54c_6.\tag{8.3}
> $$
> (b) Show that the admissible changes $x=u^2x'+r$, $y=u^3y'+su^2x'+t$, with $u,r,s,t\in k$, $u\ne0$, form a group. Show they transform (8.1) to another such equation with
> $$
> \begin{aligned}
> ua_1'&=a_1+2s,&u^2a_2'&=a_2-sa_1+3r-s^2,\\
> u^3a_3'&=a_3+ra_1+2t,\\
> u^4a_4'&=a_4-sa_3+2ra_2-(rs+t)a_1+3r^2-2st,\\
> u^6a_6'&=a_6+ra_4-ta_3+r^2a_2-rta_1+r^3-t^2,
> \end{aligned}
> $$
> and
> $$
> \begin{aligned}
> u^2b_2'&=b_2+12r,&u^4b_4'&=b_4+rb_2+6r^2,\\
> u^6b_6'&=b_6+2rb_4+r^2b_2+4r^3,\\
> u^8b_8'&=b_8+3rb_6+3r^2b_4+r^3b_2+3r^4,
> \end{aligned}
> $$
> and $u^4c_4'=c_4$, $u^6c_6'=c_6$, $u^{12}\Delta'=\Delta$, $j'=j$. (Hints are at the end of the book.)
>
> (c) Suppose the seemingly more general change $x=vx'+r$, $y=wy'+vsx'+t$, with $v,w\ne0$, takes Weierstrass equations to Weierstrass equations. Show $v=u^2$, $w=u^3$ for some $u\in k$.
>
> (d) Replace $y$ by $y/2$ in (8.3) to get $y^2=4x^3-g_2x-g_3$, $g_2=108c_4$, $g_3=216c_6$. Show $\Delta_{\mathrm{old}}=g_2^3-27g_3^2$ equals $\Delta_{(8.3)}=2^63^9(c_4^3-c_6^2)$, and that the old invariant $1728g_2^3/\Delta_{\mathrm{old}}$ agrees with the new invariant $c_4^3/\Delta$.
>
> (e) Find an admissible change taking the modified universal curve
> $$
> y^2=x^3-\frac{27j}{4(j-1728)}x-\frac{27j}{4(j-1728)}\tag{8.4}
> $$
> to
> $$
> y^2+xy=x^3-\frac{36}{j-1728}x-\frac1{j-1728}.\tag{8.5}
> $$
> Confirm their stated discriminants $2^63^{12}j^2/(j-1728)^3$ and $j^2/(j-1728)^3$, respectively, and that both invariants are $j$.

> **Context and notation.** The general equation (8.1) is $y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$. Set $b_2=a_1^2+4a_2$, $b_4=a_1a_3+2a_4$, $b_6=a_3^2+4a_6$, $b_8=a_1^2a_6-a_1a_3a_4+a_2a_3^2+4a_2a_6-a_4^2$, $c_4=b_2^2-24b_4$, $c_6=-b_2^3+36b_2b_4-216b_6$, $\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6$, and $j=c_4^3/\Delta$ when $\Delta\ne0$. These definitions and equations (8.2)–(8.5) are on printed pp. 314–315 / PDF pp. 327–328.

## Hints

> [!hint]- Hint 1
> Expand in a polynomial ring. Keep track of the weights of each invariant under the scaling parameter $u$.

> [!hint]- Hint 2
> For (c), try $u=w/v$. For (e), use $s=u/2$, $r=-3/2$, $t=0$, and $u^2=-18$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> All assertions in (a),(b) are polynomial identities over $\mathbb Z$, so verification in the polynomial ring proves them in every characteristic in which the divisions used are permitted.
>
> (a) Direct expansion gives $b_2b_6-b_4^2=4(a_1^2a_6-a_1a_3a_4+a_2a_3^2+4a_2a_6-a_4^2)$. Substitute the definitions of $c_4,c_6$ into $c_4^3-c_6^2$ and cancel the $b_2^6$ and $b_2^4b_4$ terms. The remaining expression is
> $$
> 432b_2^2b_4^2-432b_2^3b_6-13824b_4^3+15552b_2b_4b_6-46656b_6^2.
> $$
> Using $b_2b_6-b_4^2=4b_8$ makes this $1728\Delta$. Completing the square gives (8.2). For the next substitution, multiply by $216^2=36^3$: its right side becomes
> $$
> (x-3b_2)^3+9b_2(x-3b_2)^2+648b_4(x-3b_2)+11664b_6
> =x^3-27c_4x-54c_6.
> $$
> This verifies (8.3), including its constants.
>
> (b) Write a change as $T(u,r,s,t)$. Ordinary composition, applying $T(v,R,S,T)$ first, has parameters
> $$
> (uv,\ r+u^2R,\ s+uS,\ t+su^2R+u^3T).
> $$
> The identity is $(1,0,0,0)$ and the inverse has parameters $(u^{-1},-r/u^2,-s/u,(rs-t)/u^3)$. Thus these changes form a group. Substitute $u^2x'+r$ and $u^3y'+su^2x'+t$ into the original equation and divide by $u^6$. The coefficients of $x'y'$, $(x')^2$, $y'$, $x'$ and the constant term are exactly the five displayed $a_i'$; no other monomials remain besides $(y')^2-(x')^3$. For example the $x'y'$ coefficient is $(a_1+2s)/u$, while the $(x')^2$ coefficient on the right is $(a_2-sa_1+3r-s^2)/u^2$.
>
> Inserting these five coefficients into the definitions yields the four displayed $b_i'$ identities. For example,
> $$
> u^2b_2'=(a_1+2s)^2+4(a_2-sa_1+3r-s^2)=b_2+12r.
> $$
> Using the four identities in $c_4',c_6',\Delta'$ cancels all powers of $r$, giving weights $4,6,12$, respectively. The quotient $c_4'^3/\Delta'$ is consequently unchanged. These expansions, all five coefficient identities, both identities in (a), and all seven weighted invariant identities were also verified symbolically in a polynomial ring; no sampling of numerical coefficients is being substituted for the identities.
>
> (c) Equality of the normalized leading coefficients requires $w^2=v^3$. Put $u=w/v\in k^*$. Then $u^2=w^2/v^2=v$ and $u^3=w^3/v^3=w$; this works in all characteristics.
>
> (d) Calculation gives $108^3=27\cdot216^2=2^63^9$, proving the discriminant equality. The $c_4$ invariant of the equation (8.3), computed anew from its coefficients, is $6^4c_4$, whereas its discriminant is $6^{12}\Delta$. Hence its invariant is $c_4^3/\Delta$. The old expression is also
> $$
> \frac{1728\cdot108^3c_4^3}{2^63^9(c_4^3-c_6^2)}
> =\frac{1728c_4^3}{c_4^3-c_6^2}=\frac{c_4^3}{\Delta}.
> $$
> This distinguishes the original invariants from those recomputed after the change of scale.
>
> (e) Put $D=j-1728$, choose $i\sqrt2$ in an algebraic extension, and use
> $$
> u=3i\sqrt2,\quad r=-3/2,\quad s=3i\sqrt2/2=u/2,\quad t=0.
> $$
> Then $u^2=-18$, $u^4=324$, $u^6=-5832$. The transformation formulas give $a_1'=1$, $a_2'=a_3'=0$, $a_4'=-36/D$, $a_6'=-1/D$, proving the required equation. This is an admissible isomorphism over $\mathbb Q(i\sqrt2,j)$, not necessarily over $\mathbb Q(j)$. For (8.5), $b_2=1$, $b_4=-72/D$, $b_6=-4/D$, whence $c_4=j/D$ and direct substitution gives $\Delta=j^2/D^3$. Its invariant is $j$. Since $u^{12}=2^63^{12}$, (8.4) has the stated discriminant and the same invariant. These calculations are over characteristic zero, with $j\ne0,1728$ for nonsingular universal fibers.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed pp. 318–319 / PDF pp. 331–332. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Computational verification:** Exact symbolic expansion was run for both identities in (a), the transformed equation, and all seven invariant transformations. The independent derivation above specifies the cancellations and coefficient comparisons.
- **Field of the change:** The change in (e) is made over an algebraic extension containing a square root of $-2$. Equality of $j$ does not by itself imply that two curves are isomorphic over the original ground field.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
