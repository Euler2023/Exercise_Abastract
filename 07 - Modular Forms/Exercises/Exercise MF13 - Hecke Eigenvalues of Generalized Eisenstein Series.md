---
title: "Exercise MF13: Hecke Eigenvalues of Generalized Eisenstein Series"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 5, §5.2, Exercise 5.2.5(a)–(d), printed p. 177, PDF p. 191"
source_refs:
  - "S7/ch-5/sec-2/ex-5"
created: 2026-10-23
---

# Exercise MF13: Hecke Eigenvalues of Generalized Eisenstein Series

## Problem Statement

> [!question] Original Exercise 5.2.5
> **Complete original Exercise 5.2.5:** This exercise proves Proposition 5.2.3.
>
> (a) Show that the generalized divisor sum $\sigma_{k-1}^{\psi,\varphi}$ is multiplicative, i.e., $\sigma_{k-1}^{\psi,\varphi}(nm)=\sigma_{k-1}^{\psi,\varphi}(n)\sigma_{k-1}^{\psi,\varphi}(m)$ when $\gcd(n,m)=1$.
>
> (b) Let $p$ be prime and let $n\ge1$. Write $n=n'p^e$ with $p\nmid n'$ and $e\ge0$. Use part (a) to show that
> $$
> \sigma_{k-1}^{\psi,\varphi}(np)=\psi(p)\sigma_{k-1}^{\psi,\varphi}(n)+\varphi(p^{e+1})(p^{e+1})^{k-1}\sigma_{k-1}^{\psi,\varphi}(n').
> $$
> Also use part (a) to show that when $e\ge1$ and $p\nmid N$,
> $$
> \chi(p)p^{k-1}\sigma_{k-1}^{\psi,\varphi}(n/p)=\varphi(p)p^{k-1}\sigma_{k-1}^{\psi,\varphi}(n)-\varphi(p^{e+1})(p^{e+1})^{k-1}\sigma_{k-1}^{\psi,\varphi}(n').
> $$
> Use the two formulas to show that for all $e\ge0$ and $p\nmid N$,
> $$
> \sigma_{k-1}^{\psi,\varphi}(np)+\chi(p)p^{k-1}\sigma_{k-1}^{\psi,\varphi}(n/p)
> =(\psi(p)+\varphi(p)p^{k-1})\sigma_{k-1}^{\psi,\varphi}(n).
> $$
> Show that this formula also holds for all $e\ge0$ and $p\mid uv$.
>
> (c) Excluding the case $k=2$, $\psi=\varphi=1_1$, use part (b) and formula (5.4) to show that if $uv=N$ or $p\nmid N$ then
> $$
> a_n(T_pE_k^{\psi,\varphi,t})=(\psi(p)+\varphi(p)p^{k-1})a_n(E_k^{\psi,\varphi,t}),\qquad n\ge1.
> $$
> Show the same result for $n=0$. (Hints for this exercise are at the end of the book.)
>
> (d) Complete the proof by computing $a_n(E_2^{1_1,1_1,t})$ and $a_n(T_pE_2^{1_1,1_1,t})$ for all $n$.
>
> **Setup used in the exercise.** The weight is an integer $k\ge1$. Let $\psi,\varphi$ be primitive Dirichlet characters modulo $u,v$, respectively, with $(\psi\varphi)(-1)=(-1)^k$ and $tuv\mid N$. Let $\chi$ be the character modulo $N$ induced by $\psi\varphi$. Define
> $$
> \sigma_{k-1}^{\psi,\varphi}(n)=\sum_{d\mid n,\ d>0}\psi(n/d)\varphi(d)d^{k-1}\quad(n\ge1),
> $$
> and set this sum equal to $0$ outside the positive integers. Usually $E_k^{\psi,\varphi,t}(\tau)=E_k^{\psi,\varphi}(t\tau)$. In weight $2$, when both characters are $1_1$, we require $t>1$ and instead define
> $$
> E_2^{1_1,1_1,t}(\tau)=E_2^{1_1,1_1}(\tau)-tE_2^{1_1,1_1}(t\tau).
> $$
> The conclusion required in (d), as stated in Proposition 5.2.3, is that if $p\nmid N$, or if $t$ is prime and $N$ is a power of $t$, then
> $$
> T_pE_2^{1_1,1_1,t}=(1+1_N(p)p)E_2^{1_1,1_1,t}.
> $$
> The cited proposition is on printed p. 173 / PDF p. 187. Each character is extended by $0$ at the nonunits of its own modulus.

## Hints

> [!hint]- Hint 1 — separate the prime-power factor
> For $n=n' p^e$, set $A=\psi(p)$ and $B=\varphi(p)p^{k-1}$, and write the $p$-part as $S_e=\sum_{j=0}^eA^{e-j}B^j$. Useful identities are $S_{e+1}=AS_e+B^{e+1}$ and $BS_e-ABS_{e-1}=B^{e+1}$.

> [!hint]- Hint 2 — the shift and the constant term
> If $uv=N$, then $t=1$. If $p\nmid N$, then $p\nmid t$, so $t\mid np$ if and only if $t\mid n$. Treat $n=0$ separately: the constant term in weight $1$ has two symmetric contributions.

> [!hint]- Hint 3 — weight two exception
> With the normalization used in the main text, the positive-degree coefficients of $E_2^{1_1,1_1,t}$ are $2(\sigma_1(n)-t\sigma_1(n/t))$. When $N=t^f$ and the bad prime is $p=t$, compare $\sigma_1(tn)-t\sigma_1(n)$ with $\sigma_1(n)-t\sigma_1(n/t)$; they are equal. The minus sign in the appendix hint must be replaced by the plus sign in formula (5.4); see the source issue below.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> This is an independent derivation of (a)–(d). The input consists of the modular forms and Fourier expansions established in Theorem 4.5.1 (printed p. 129 / PDF p. 143), §4.6 (printed pp. 132–133 / PDF pp. 146–147), §4.8 (printed pp. 140–141 / PDF pp. 154–155), and Proposition 5.2.2(b), formula (5.4) (printed pp. 171–172 / PDF pp. 185–186). The conclusion of Proposition 5.2.3 is not assumed.
>
> Write $s(n)=\sigma_{k-1}^{\psi,\varphi}(n)$ and set $s(x)=0$ whenever $x$ is not a positive integer. This convention is used only for positive-degree Fourier coefficients; the constant term is treated separately.
>
> **(a) Coprime multiplicativity.** If $\gcd(n,m)=1$, every positive divisor $d\mid nm$ has a unique decomposition $d=ab$ with $a\mid n$ and $b\mid m$. The zero extensions of Dirichlet characters remain completely multiplicative, so
> $$
> \begin{aligned}
> s(nm)
> &=\sum_{a\mid n}\sum_{b\mid m}\psi((n/a)(m/b))\varphi(ab)(ab)^{k-1}\\
> &=\left(\sum_{a\mid n}\psi(n/a)\varphi(a)a^{k-1}\right)
> \left(\sum_{b\mid m}\psi(m/b)\varphi(b)b^{k-1}\right)\\
> &=s(n)s(m).
> \end{aligned}
> $$
>
> **(b) The local recurrence and bad primes.** Write $n=n' p^e$ with $p\nmid n'$, and set
> $$
> A=\psi(p),\qquad B=\varphi(p)p^{k-1},\qquad
> S_e=\sum_{j=0}^eA^{e-j}B^j,\qquad S_{-1}=0.
> $$
> Part (a) gives $s(n)=s(n')S_e$. Separating the last term gives, for $e\ge0$,
> $$
> S_{e+1}=AS_e+B^{e+1}.
> $$
> Multiply by $s(n')$ and use $B^{e+1}=\varphi(p^{e+1})(p^{e+1})^{k-1}$ to obtain the first formula in the question.
>
> For $e\ge1$, termwise cancellation in the finite sum gives
> $$
> BS_e-ABS_{e-1}=B^{e+1}.
> $$
> If $p\nmid N$, then $\chi(p)=\psi(p)\varphi(p)$, so $AB=\chi(p)p^{k-1}$. Multiplying this identity by $s(n')$ gives the second formula in the question. Adding the two identities yields
> $$
> S_{e+1}+ABS_{e-1}=(A+B)S_e.
> $$
> For $e=0$, we have $S_{-1}=0$, $S_0=1$, and $S_1=A+B$, so the same identity still holds. This is exactly the case $s(n/p)=0$. Thus the third formula holds for every $e\ge0$.
>
> If $p\mid uv$, then at least one of $A,B$ is $0$, and $\chi(p)=0$. Hence $AB=\chi(p)p^{k-1}=0$, and the same finite-sum identity proves the third formula for these bad primes as well. This argument does not automatically apply when $p\mid N$ but $p\nmid uv$: in that case $AB$ is generally nonzero while $\chi(p)=0$.
>
> **(c) The nonexceptional Eisenstein series, including $n=0$.** Put $E=E_k^{\psi,\varphi,t}$. Apart from the weight-two case with both characters trivial, the main text gives
> $$
> a_n(E)=\begin{cases}2s(n/t),&t\mid n,\\0,&t\nmid n,\end{cases}\qquad n\ge1.
> $$
> If $uv=N$, then $tuv\mid N$ forces $t=1$. Every prime $p$ either satisfies $p\nmid N$ or divides $uv$, so part (b) covers all primes. Formula (5.4) therefore gives
> $$
> a_n(T_pE)=2\{s(np)+\chi(p)p^{k-1}s(n/p)\}
> =(\psi(p)+\varphi(p)p^{k-1})a_n(E).
> $$
> If $p\nmid N$, then $p\nmid t$. When $t\mid n$, write $n=tm$ and apply (5.4) together with part (b) at $m$. When $t\nmid n$, we also have $t\nmid np$, and $n/p$, if integral, is not divisible by $t$ either. Both sides are then zero. This proves the identity for every positive-degree coefficient.
>
> Let $C=a_0(E)$. In (5.4), the coefficient $a_{0/p}$ means $a_0$, so
> $$
> a_0(T_pE)=(1+\chi(p)p^{k-1})C.
> $$
> For $k\ge2$, the constant term is $C=\delta(\psi)L(1-k,\varphi)$. If $\psi\ne1_1$, then $C=0$. If $\psi=1_1$, then $\psi(p)=1$; in either allowed case we have $\chi(p)=\varphi(p)$, and hence
> $$
> 1+\chi(p)p^{k-1}=\psi(p)+\varphi(p)p^{k-1}.
> $$
> In weight $1$, we must use the actual constant term from §4.8:
> $$
> C=\delta(\psi)L(0,\varphi)+\delta(\varphi)L(0,\psi).
> $$
> The first summand is handled as above. The second can be nonzero only if $\varphi=1_1$; in either allowed case, $\chi(p)=\psi(p)$, and $k-1=0$, so $1+\chi(p)=\psi(p)+\varphi(p)$. Each summand therefore satisfies the required identity. This proves the case $n=0$. Equality of all Fourier coefficients gives equality of the holomorphic functions.
>
> **(d) The weight-two exception with both characters trivial.** Here $t>1$ and $t\mid N$. With the normalization of the main text, write
> $$
> H_t=E_2^{1_1,1_1,t}=\frac{t-1}{12}
> +2\sum_{n\ge1}D_t(n)q^n,\qquad
> D_t(n)=\sigma_1(n)-t\sigma_1(n/t),
> $$
> Here $\sigma_1(x)=0$ if $x$ is not a positive integer. Formula (5.4) gives, for each $n\ge1$,
> $$
> \begin{aligned}
> a_n(T_pH_t)
> =2\big[&\sigma_1(np)+1_N(p)p\sigma_1(n/p)\\
> &-t\sigma_1(np/t)-1_N(p)pt\sigma_1(n/(pt))\big].
> \end{aligned}
> $$
> If $p\nmid N$, then $p\nmid t$. Taking $k=2$ and $\psi=\varphi=1_1$ in the divisor-sum identity from (b) gives
> $$
> \sigma_1(np)+p\sigma_1(n/p)=(1+p)\sigma_1(n).
> $$
> The same identity applies to the terms involving $n/t$: use it directly if $t\mid n$; otherwise all three terms vanish. Subtracting the two identities gives $a_n(T_pH_t)=(1+p)a_n(H_t)$.
>
> The remaining allowed case is that $t$ is prime, $N=t^f$, and $p\mid N$. Then necessarily $p=t$ and $1_N(t)=0$. Write $n=t^em$ with $t\nmid m$. Factoring the divisor sum and setting $R_e=1+t+\cdots+t^e$ and $R_{-1}=0$ gives
> $$
> \begin{aligned}
> D_t(tn)&=\sigma_1(m)(R_{e+1}-tR_e)=\sigma_1(m),\\
> D_t(n)&=\sigma_1(m)(R_e-tR_{e-1})=\sigma_1(m).
> \end{aligned}
> $$
> Thus $a_n(T_tH_t)=2D_t(tn)=2D_t(n)=a_n(H_t)$, including the case $e=0$.
>
> Finally, the constant term is
> $$
> a_0(T_pH_t)=(1+1_N(p)p)\frac{t-1}{12}.
> $$
> This agrees with the eigenvalues $1+p$ and $1$ in the two cases above. Hence, for all $n\ge0$, the coefficient identities give
> $$
> T_pH_t=(1+1_N(p)p)H_t
> $$
> This completes the proof of Proposition 5.2.3 throughout its stated range.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Exercises/Exercise MF5 - Hecke Operators|Exercise MF5 - Hecke Operators]]

## Notes

- This note contains every part (a)–(d) of Exercise 5.2.5. The exercise, referenced proposition, coefficient formulas, and appendix hints were checked against rendered PDF pages. The solution is independently derived.
- Keep the moduli distinct: $\psi,\varphi$ have moduli $u,v$, whereas $\chi$ has modulus $N$. Raising the level can introduce bad primes at which only $\chi(p)$ vanishes; $\psi(p)$ and $\varphi(p)$ need not vanish. This explains the level restrictions in the proposition.
- The weight-one constant term uses the symmetric formula in §4.8 (printed pp. 140–141 / PDF pp. 154–155), rather than the formula for weights at least two.
- **Source issue — signs and normalization in the appendix hint.** The hint to 5.2.5(d), printed p. 421 / PDF p. 432, writes $a_n(E)=\sigma_1(n)-t\sigma_1(n/t)$ and gives the $1_N(p)p$ term in $a_n(T_pE)$ a minus sign. In §4.6, the positive-degree coefficients of $E_2^{1_1,1_1}$ are actually $2\sigma_1(n)$; using the normalization implicit in the hint requires explicitly setting $F=H_t/2$. The second Hecke term must have the plus sign in formula (5.4). The solution above retains the normalization of the main text and uses the correct plus sign. The exercise statement itself needs no correction.
- **Source issue — the weight-one boundary in hint (c).** The hint to 5.2.5(c), printed p. 421 / PDF p. 432, says that the constant term requires no check unless $\psi=1_1$. In weight $k=1$, if $\varphi=1_1$ and $\psi$ is nontrivial, there is also the symmetric constant term $L(0,\psi)$. It must be checked separately, or the two characters must first be interchanged using weight-one symmetry. The solution above checks both summands.

- **Independent finite verification:** for primitive-character combinations of moduli $1,3,4$, including the weight-one boundary, 24,564 generalized-divisor-sum multiplicativity and positive-degree Hecke coefficient identities were checked. A further 1,620 positive-degree identities were checked for the weight-two exception, including the allowed bad primes. Constant terms are handled by the analytic proof above. These finite checks supplement the proof for all indices.

- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]]. This note counts only as original Exercise 5.2.5.
