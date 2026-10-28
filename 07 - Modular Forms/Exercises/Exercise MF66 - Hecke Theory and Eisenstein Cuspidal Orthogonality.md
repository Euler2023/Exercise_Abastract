---
title: "Exercise MF66: Hecke Theory and Eisenstein Cuspidal Orthogonality"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.11, Exercise 5.11.2, printed p. 213, PDF p. 227"
source_refs:
  - "S7/ch-5/sec-11/ex-2"
created: 2026-10-28
---

# Exercise MF66: Hecke Theory and Eisenstein Cuspidal Orthogonality

## Problem Statement

> [!question] Original Exercise 5.11.2
> (a) Let $f\in S_k(\Gamma_1(N))$ be a normalized eigenform with eigenvalue $a_p$ under the Hecke operator $T_p$ for each prime $p$. Show that $f$ has eigenvalue $\overline{a_p}$ under the adjoint $T_p^*$. (Hints for this exercise are at the end of the book.)
>
> (b) Let $\chi$ be a Dirichlet character modulo $N$. Let $\psi$ and $\varphi$ be primitive Dirichlet characters modulo $u$ and $v$ such that $uv\mid N$ and $(\psi\varphi)(-1)=(-1)^k$ and $\psi\varphi=\chi$ at level $N$, excluding the case $k=2$, $\psi=\varphi=1$. Recall that $E_k^{\psi,\varphi}/2$ is a normalized eigenform. Let its $T_p$-eigenvalues be denoted $b_p$. Show that $b_p\ne a_p$ for some prime $p$.
>
> (c) Show that $E_k^{\psi,\varphi}\perp f$.
>
> (d) Let $t$ be a positive integer such that $tuv\mid N$. Let $\alpha=\left(\begin{smallmatrix}t^{-1}&0\\0&1\end{smallmatrix}\right)$ so that $\alpha'=(1/t)\left(\begin{smallmatrix}t&0\\0&1\end{smallmatrix}\right)$ in Proposition 5.5.2. We know that $\alpha^{-1}\Gamma_1(N)\alpha=\Gamma_1(N/t)\cap\Gamma^0(t)$. Note that $E_k^{\psi,\varphi,t}$ is a nonzero constant multiple of $E_k^{\psi,\varphi}[\alpha']_k$ since the exceptional case is excluded. For any $f\in S_k(\Gamma_1(N))$ show that
> $$
> \langle f,E_k^{\psi,\varphi}[\alpha']_k\rangle_{\Gamma_1(N)}=\langle f[\alpha]_k,E_k^{\psi,\varphi}\rangle_{\Gamma_1(N/t)}.
> $$
> Explain why this is $0$ and why consequently all of $E_k(N,\chi)$ is orthogonal to $S_k(\Gamma_1(N))$.

> [!warning] Source issue and corrected scope
> The general adjoint assertion (a) is false at bad primes for old eigenforms. In (b), a basic Eisenstein form at its intrinsic level need not remain an eigenform at newly bad primes after the level is raised. The subgroup equality and the resulting untraced level-$N/t$ pairing in (d) are also false as written. The original exercise and hint reference are preserved. Below are explicit counterexamples, the valid good-prime and common-level Hecke statements, and a complete proof of the intended general orthogonality via unfolding with its analytic input stated explicitly.

## Hints

> [!hint]- Hint 1
> At good primes $T_p$ is normal, so an eigenvector is also an eigenvector of its adjoint. At bad primes oldspace matrices can have Jordan blocks.

> [!hint]- Hint 2
> For the general orthogonality conclusion use the earlier unfolding argument: the horizontal integral of a cusp form over a period is zero.

> [!hint]- Hint 3
> For (d), compute the actual conjugate subgroup before comparing inner products. Average a trace from it to $\Gamma_1(N/t)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **Scope.** The final orthogonality assertion is valid, but (a) and the displayed subgroup equality in (d) are false in the stated generality. We first prove the valid Hecke argument in its stated range and give explicit counterexamples, then prove the general orthogonality and its correct trace formula. Inner products are linear in their first argument and normalized by hyperbolic volume.
>
> **(a), good primes.** For $p\nmid N$, $T_p^*=\langle p\rangle^{-1}T_p$, and the commuting diamond operator makes $T_p$ normal. For any normal finite-dimensional operator $T$, $\|(T^*-\overline\lambda)v\|^2=\|(T-\lambda)v\|^2$; expand both sides and use $TT^*=T^*T$. Thus $Tv=\lambda v$ implies $T^*v=\overline\lambda v$. This proves the desired assertion for good primes.
>
> For a concrete bad-prime failure take the normalized weight-two newform $f_0$ of level $11$ from Exercise 5.8.3, with $a_2(f_0)=-2$, and put $f_j(\tau)=f_0(2^j\tau)$ for $j=1,2,3$ at level $88$. On their four-dimensional span,
> $$
> [T_2]=\begin{pmatrix}-2&1&0&0\\-2&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}.
> $$
> The normalized form $g=f_0+2f_1+2f_2$ is a simultaneous Hecke eigenform: $T_2g=0$ by the matrix, all primes other than $2$ act by the eigenvalues of $f_0$ because they commute with the shifts, and the Hecke recurrences supply all indices. Set $h=f_1+2f_2+2f_3$. The same matrix gives $T_2h=g$. If the printed claim were true, $T_2^*g=0$, so
> $$
> 0<\langle g,g\rangle=\langle T_2h,g\rangle=\langle h,T_2^*g\rangle=0,
> $$
> a contradiction. This is a counterexample inside the stated cusp space, not merely an abstract matrix example. The appendix's calculation assumes without justification that $T_p^*f$ is proportional to $f$; normality supplies that step only in its valid range.
>
> **(b), precise elementary conclusion.** At a common level where both forms really are simultaneous eigenforms with the same diamond character, equality $b_p=a_p$ for every prime forces equality of all positive Fourier coefficients: use $a_1=1$, the prime-power recurrence $a_{p^{r+1}}=a_pa_{p^r}-\chi(p)p^{k-1}a_{p^{r-1}}$, and multiplicativity at coprime indices. Hence $E_k^{\psi,\varphi}/2-f=C$ is constant. It is a weight-$k$ form for $\Gamma_1(N)$; applying $\left(\begin{smallmatrix}1&0\\N&1\end{smallmatrix}\right)$ gives $C=(N\tau+1)^kC$, so $C=0$ for $k>0$. This contradicts the linear disjointness of the cusp space and Eisenstein complement, supplied by the Eisenstein basis theorems. Therefore some prime eigenvalues differ under those hypotheses, in particular when $N=uv$.
>
> If $N$ is a proper multiple of $uv$, the basic Eisenstein form need not itself be a level-$N$ eigenform at newly bad primes, so the printed $b_p$ is not defined there in that sense. For example the normalized $E_4$ of level $1$, considered at level $2$, satisfies $T_{2,2}E_4=9E_4-8E_4(2\tau)$, which is not proportional to $E_4$. At good primes its eigenvalue is still well defined. A proof of separation using only good-prime eigenvalues would require an additional result; the elementary coefficient argument just given does not establish it. The general conclusion (c) does not depend on this defective step.
>
> **(c), full orthogonality by unfolding.** We use the analytic-continuation theorem for the principal-level Eisenstein families constructed in §4.10 and recalled in §5.11 [printed pp.210–212/PDF pp.224–226]: in their absolute-convergence region they are coset sums of the weight-$k$ translates of $y^s$; their meromorphic continuations have locally uniform polynomial growth in every cusp, away from parameter poles. Their holomorphic values or holomorphic linear combinations at $s=0$ span the Eisenstein complement. This analytic-continuation theorem is an imported analytic input, not proved by the finite Hecke calculation.
>
> Here is the integral argument in detail. At principal level $L$ let $F$ be a cusp form, and let $E(z,\overline s)$ be the family for the cusp $\infty$. Put
> $$
> I(s)=\int_{\Gamma(L)\backslash\mathcal H}F(z)\overline{E(z,\overline s)}y^k\,d\mu(z).
> $$
> For $\operatorname{Re}(k+2s)>2$, unfolding the coset sum, with its fixed nonzero normalization factor suppressed, gives
> $$
> I(s)=C_L\int_0^\infty\int_0^L F(x+iy)y^{k+s-2}\,dx\,dy.
> $$
> The unfolding is absolutely justified: the global cusp bound $|F(z)|\le C y^{-k/2}$ makes the strip integral near $y=0$ bounded by $C'\int_0^1y^{k/2+\operatorname{Re}s-2}dy$, finite in that region, and Fourier cusp decay controls $y\to\infty$. Nonnegative Tonelli applied to the absolute coset sum, followed by change of variables in each term, gives exactly this absolute strip integral. Each horizontal integral of $F$ is zero by its zero constant term (Exercise 5.11.1). Hence $I(s)=0$ in that half-plane.
>
> The named continuation theorem permits meromorphic continuation of this pairing: on a compact part of the modular curve use locally uniform continuation; in every cusp, the exponential decay of $F$ dominates the locally uniform polynomial growth of the family and its parameter derivatives. Dominated integration thus gives the continuation, with any poles interpreted meromorphically. The identity theorem forces it to remain zero. Evaluating a holomorphic family value or any holomorphic linear combination at $s=0$ gives $\langle F,E\rangle=0$. Other cusp families follow by a modular change of variables, since the transformed $F$ is still a cusp form for the principal group. Every Eisenstein form is a linear combination of these, proving orthogonality at principal level. For any congruence subgroup, pass to a contained principal group; normalized Petersson pairings are independent of that choice of common level. This proves (c) for arbitrary $f$, and in fact the final conclusion of the exercise, without assuming either false printed claim.
>
> **(d), corrected change of level.** Put $\Gamma=\Gamma_1(N)$ and $H=\alpha^{-1}\Gamma\alpha$. Direct conjugation gives
> $$
> H=\left\{\begin{pmatrix}a&tb\\c/t&d\end{pmatrix}:\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_1(N)\right\}\subset K=\Gamma_1(N/t).
> $$
> Its diagonal entries still satisfy $a,d\equiv1\pmod N$, a condition missing from the printed right-hand subgroup. For $N=4,t=2$, $\left(\begin{smallmatrix}3&2\\4&3\end{smallmatrix}\right)$ has determinant one and lies in $\Gamma_1(2)\cap\Gamma^0(2)$ but not in $H$. This disproves the claimed equality.
>
> Change variables $w=\alpha z$ in the pairing, using $\alpha'=\det(\alpha)\alpha^{-1}$. The slash factors cancel by $\alpha'\alpha=\det(\alpha)I$ and the height transformation. Hyperbolic volume is unchanged under conjugation. The correct identity is
> $$
> \langle f,E[\alpha']_k\rangle_\Gamma=\langle f[\alpha]_k,E\rangle_H.
> $$
> The first transformed form is a cusp form for $H$; it need not be a form for $K$. To write the pairing at $K$, let $m=[K:H]$ and
> $$
> \operatorname{AvTr}_H^K(g)=\frac1m\sum_{\gamma\in H\backslash K}g[\gamma]_k.
> $$
> This is a cusp form for $K$, by permutation of the cosets and cusp vanishing of every summand. Decomposing a fundamental domain into coset translates, or applying the normalized trace identity, gives
> $$
> \langle f,E[\alpha']_k\rangle_\Gamma=\langle\operatorname{AvTr}_H^K(f[\alpha]_k),E\rangle_K=0.
> $$
> The last equality is the unfolding result above. The normalized average also handles differing intersections with $\{\pm I\}$: repeated matrix cosets and the corresponding index cancel. Finally $E_k^{\psi,\varphi,t}$ is a nonzero scalar multiple of $E[\alpha']_k$, and these degeneracy forms span the nonexceptional Eisenstein block. Thus every such block is orthogonal to the cusp space. The exceptional weight-two trivial block, although excluded from the requested Hecke route, is also covered by the holomorphic-combination version of the unfolding argument.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product]]
- [[04 - Linear Algebra and Modules/Concepts/Normal Operators and the Spectral Theorem]]
- [[07 - Modular Forms/Concepts/Eisenstein Series]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.11.2, printed p. 213 / PDF p. 227]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked appendix:** The hints for all four parts are on printed p.424/PDF p.435. The hint for (a) starts by assuming $T_p^*f=\widetilde a_pf$, which is exactly the step invalidated by the level-$88$ counterexample.
- **Proof boundary:** The meromorphic continuation and cusp-growth theorem for Eisenstein families is imported from the source's analytic construction. The solution does not claim to derive that theorem, or good-prime cuspidal–Eisenstein spectral separation, from elementary finite-dimensional linear algebra. The general orthogonality proof above follows the earlier §5.11 integral method, with the absolute-convergence and trace steps supplied.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
